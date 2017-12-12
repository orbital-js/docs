## Creating a Component
Almost everything is a component – Service, Repository, Factory, Helper [...] and they can be **injected** into controllers or to other components through `constructor`.

![Components 1](/assets/Components_1.png)

In the previous chapter, we have built a simple `CatsController`.

The controllers should only handle HTTP requests and delegate more complex tasks to the **components**. The components are a plain TypeScript classes with `@Component()` decorator.

!!! hint
    Since Nest enables the possibility to design, organize the dependencies in more OO-way, we strongly recommend to follow the **SOLID** principles.

Let's create a `CatsService` component:

### TypeScript
    #!ts
    import { Component } from '@nestjs/common';
    import { Cat } from './interfaces/cat.interface';

    @Component()
    export class CatsService {
        private readonly cats: Cat[] = [];

        create(cat: Cat) {
            this.cats.push(cat);
        }

        findAll(): Cat[] {
            return this.cats;
        }
    }

### JavaScript
    #!js
    import { Component } from '@nestjs/common';

    @Component()
    export class CatsService {
        constructor() {
            this.cats = [];
        }

        create(cat) {
            this.cats.push(cat);
        }

        findAll() {
            return this.cats;
        }
    }


There's nothing specifically about components. Here's a `CatsService`, a basic class with one property and two methods. The only difference is that it has the `@Component()` decorator. The `@Component()` attaches the metadata, thereby Nest knows that this class is a Nest component.

!!! note
    There's a `Cat` interface here. I didn't mention it because the schema is exactly same as in the `CreateCatDto` class which we have created in the previous chapter.

## Dependency Injection

Since we have the service class already done, let's use it inside the `CatsController`:

### TypeScript
    #!ts
    import { Controller, Get, Post, Body } from '@nestjs/common';
    import { CreateCatDto } from './dto/create-cat.dto';
    import { CatsService } from './cats.service';
    import { Cat } from './interfaces/cat.interface';

    @Controller('cats')
    export class CatsController {
        constructor(private readonly catsService: CatsService) {}

        @Post()
        async create(@Body() createCatDto: CreateCatDto) {
            this.catsService.create(createCatDto);
        }

        @Get()
        async findAll(): Promise<Cat[]> {
            return this.catsService.findAll();
        }
    }

### JavaScript
    #!js
    import { Controller, Get, Post, Body, Bind, Dependencies } from '@nestjs/common';
    import { CatsService } from './cats.service';

    @Controller('cats')
    @Dependencies(CatsService)
    export class CatsController {
        constructor(catsService) {
            this.catsService = catsService;
        }

        @Post()
        @Bind(Body())
        async create(createCatDto) {
            this.catsService.create(createCatDto);
        }

        @Get()
        async findAll() {
            return this.catsService.findAll();
        }
    }

The `CatsService` is injected through the class constructor. Don't be afraid of the `private readonly` shortened syntax. It means that we've created and initialized the `catsService` member in the same location.

## Constructor Syntax

Nest is built around the strong design pattern, which is commonly known as a **Dependency Injection**. There's a great article about this concept in the [official Angular documentation](https://angular.io/guide/dependency-injection).

!!! hint
    Learn more about the **Dependency Injection** in Nest [here](http://docs.nestjs.com/advanced/dependency-injection).

It's extremely easy to manage dependencies with **TypeScript** because Nest will recognize your dependencies just by **type**. This single line:

    #!ts
    constructor(private readonly catsService: CatsService) {}`

!!! warning
    Be sure to set the `emitDecoratorMetadata` and `experimentalDecorators` flags to true in your tsconfig.json. This tells the compiler to attatch the decorators we use for components to the classes they decorate. Without these flags, you will get a run-time error.

## Component Instantiation

The last thing we need to do is tell the module that `CatsService` exists in our codebase. The way to go about notifying Nest of your components is by editing your `app.module.ts` file, and putting the service into the `components` array of the `@Module()` decorator metadata.

    #!ts
    import { Module } from '@nestjs/common';
    import { CatsController } from './cats/cats.controller';
    import { CatsService } from './cats/cats.service';

    @Module({
        controllers: [CatsController],
        components: [CatsService],
    })
    export class ApplicationModule { }

Now Nest will smoothly resolve the dependencies of the `CatsController` class.
That's how our directories structure looks right now:

```
src
└── server.ts
└── modules
    └── app.controller.ts
    └── app.module.ts
    └── cats
        └── cats.service.ts
        └── cats.controller.ts
        └── dto
            └── create-cat.dto.ts
        └── interfaces
            └── cat.interface.ts
```
