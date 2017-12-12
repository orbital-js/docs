
The controllers layer is responsible for handling incoming **requests**, and return a **response** to the client.
<img src="/assets/images/Controllers_1.png" />

To create a basic controller you have to attach the **metadata** to the class. Thanks to the metadata Nest knows how to map your controller into the appropriate routes. To attach the metadata we're using the **decorators** (in this case `@Controller('cats')`).

    #!ts
    import { Controller, Get } from '@nestjs/common';

    @Controller('cats')
    export class CatsController {
        @Get()
        findAll() {
            return [];
        }
    }


## Metadata

We're using `@Controller('cats')` here. This decorator is **obligatory**. The `cats` is a prefix for each route registered in the class. The prefix is **optional** what means that you could leave the parentheses empty (`@Controller()`), but it reduces redundant boilerplate code, thus you don't have to repeat yourself every time when you'd decide to create a new endpoint (route).

There's a single public method, the `findAll()`, which returns an empty array. The `@Get()` decorator tells Nest that it's necessary to create an endpoint for this route path and map every appropriate request to this handler. Since we declared the prefix for every route (`cats`), Nest will map every `/cats` **GET** request here.

When a client would call this endpoint, Nest will return with 200 status code, and the parsed **JSON**, so in this case - just an empty array. How is that possible?


There are **two possible approaches** of manipulating the response:

| Method                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Standard (recommended) | We're treating the handlers in the same way as plain functions. When we return the JavaScript object or array, it'd be **automatically**  transformed to JSON. When we return the string, Nest will send just a string. Furthermore, the response **status code** is always 200 by default, except POST requests, when it's **201**. We can easily change this behavior by adding the `@HttpCode(...)` decorator at a handler-level. |
| Express                | We can use the express [response](http://expressjs.com/en/api.html#res), which we can inject using `@Res()` decorator in the function signature, for example `findAll(@Res() response)`.                                                                                                                                                                                                                                             |

!!! warning
    It's forbidden to use both two approaches at the same time. Nest detects whether the handler is using `@Res()` or `@Next()`, and if it's truth - the standard way is disabled for this single route.


## Request Object
A lot of endpoints need an access to the client **request** details. In fact, Nest is using express [request](http://expressjs.com/en/api.html#req) object. We can force Nest to inject the request object into handler using `@Req()` decorator.

!!! hint
    There's a `@types/express` package and we strongly recommend to use it (`Request` has its own typings).

### TypeScript
    #!ts
    import { Controller, Get, Req } from '@nestjs/common';

    @Controller('cats')
    export class CatsController {
        @Get()
        findAll(@Req() request) {
            return [];
        }
    }

### JavaScript
    #!js
    import { Controller, Bind, Get, Req } from '@nestjs/common';

    @Controller('cats')
    export class CatsController {
        @Get()
        @Bind(Req())
        findAll(request) {
            return [];
        }
    }

 The request object represents the HTTP request and has properties for the request query string, parameters, HTTP headers, and e.g. body (read more <a href="http://expressjs.com/en/api.html#req" target="blank">here</a>), but in most cases, it's not necessary to grab them manually.
 We can use **dedicated decorators** instead, such as `@Body()` or `@Query()`, which are available out of the box.
 Below is a comparison of the decorators with the plain express objects.

| Decorator                  | Express Equivalent                   |
| -------------------------- | ------------------------------------ |
| `@Request()`               | `req`                                |
| `@Response()`              | `res`                                |
| `@Next()`                  | `next`                               |
| `@Session()`               | `req.session`                        |
| `@Param(param?: string)`   | `req.params` / `req.params[param]`   |
| `@Body(param?: string)`    | `req.body` / `req.body[param]`       |
| `@Query(param?: string)`   | `req.query` / `req.query[param]`     |
| `@Headers(param?: string)` | `req.headers` / `req.headers[param]` |

## More Endpoints

 We have already created an endpoint to fetch the data (**GET** route). It'd be great to provide a way of creating the new records too.
 Let's create the **POST** handler:


    #!ts
    import { Controller, Get, Post } from '@nestjs/common';

    @Controller('cats')
    export class CatsController {
        @Post()
        create() {
            // TODO: Add some logic here
        }

        @Get()
        findAll() {
            return [];
        }
    }

It's really easy. Nest provides the rest of those endpoints decorators in the same fashion - `@Put()`, `@Delete()`, `@Patch()`, `@Options()`, `@Head()`, and `@All()`.

## Status Code Manipulation

As mentioned, the response **status code** is always 200 by default, except POST requests, when it's **201**. We can easily change this behavior by adding the `@HttpCode(...)` decorator at a handler-level.

    #!ts
    import { Controller, Get, Post, HttpStatus } from '@nestjs/common';

    @Controller('cats')
    export class CatsController {
        @HttpStatus(204)
        @Post()
        create() {
            // TODO: Add some logic here
        }

        @Get()
        findAll() {
            return [];
        }
    }

## Route parameters

Routes with static paths can't help when you need to accept **dynamic data** as part of the URL.
To define routes with route parameters, simply specify the route parameters in the path of the route as shown below.

    #!ts
    @Get(':id')
    findOne(@Param() params) {
        console.log(params.id);
        return {};
    }

## Async / Await
We love modern JavaScript, and we know that the data extraction is mostly **asynchronous**. That's why Nest supports `async` functions, and works pretty well with them.

!!! hint
    Learn more about `async / await` [here](https://kamilmysliwiec.com/typescript-2-1-introduction-async-await)!

Every async function has to return the `Promise`. It means that you can return deffered value and Nest will resolve it by itself. Let's have a look on the below example:

### TypeScript
    #!ts
    @Get()
    async findAll(): Promise<any[]> {
        return [];
    }

### JavaScript
    #!js
    @Get()
    async findAll() {
        return [];
    }

## Observables

Furthermore, Nest route handlers are even more powerful. They can return the RxJS [observable streams](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html). It makes the migration between a simple web application and the Nest microservice much easier.

### TypeScript
    #!ts
    @Get()
    findAll(): Observable<any[]> {
        return Observable.of([]);
    }

### JavaScript
    #!js
    @Get()
    findAll() {
        return Observable.of([]);
    }

There is no "best practice" in this regard; use whatever format suits your needs.

## POST handler

That's strange that this POST route handler doesn't accept any client params. We should at least expect the `@Body()` argument here.

Firstly, we need to establish the **DTO** (Data Transfer Object) schema. A DTO is an object that defines how the data will be sent over the network. We could do it using **TypeScript** interfaces, or by simple classes. What may be surprising, we recommend using **classes** here. Why? The classes are the part of the JavaScript ES6 standard, so they're just plain functions. On the other hand, TypeScript interfaces are removed during the transpilation, Nest can't refer to them. It's important because features such as **Pipes** enables additional possibilities when they've access to the metatype of the variable.

Let's create the `CreateCatDto`:

    #!ts
    export class CreateCatDto {
        readonly name: string;
        readonly age: number;
        readonly breed: string;
    }

 It has only three basic properties. All of them are marked as a `readonly`, because we should always try to make our functions as [pure](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976) as possible.


Now we can use the schema inside the `CatsController`:
### TypeScript
    #!ts
    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        // TODO: Add some logic here
    }

### JavaScript
    #!js
    @Post()
    @Bind(Body())
    async create(createCatDto) {
        // TODO: Add some logic here
    }

## Error Handling
<!-- TODO: UPDATE LINK -->
There's a separated chapter about working with the exceptions <a routerLink="/exception-filters">here</a>.

## Last Step
The controller is prepared, and ready to use, but Nest doesn't know that `CatsController` exists yet, so it won't create an instance of this class. We need to tell about it.

The controller always belongs to the module, that's why we hold `controllers` array within `@Module()` decorator. Since we don't have any other modules except the root `ApplicationModule`, let's use it for now:

    #!ts
    import { Module } from '@nestjs/common';
    import { CatsController } from './cats/cats.controller';

    @Module({
        controllers: [CatsController],
    })
    export class ApplicationModule { }

Tada! We attached the metadata to the module class, so now Nest can easily reflect which controllers have to be mounted.

## Express Approach

The second way of manipulating the response is to use express [response](http://expressjs.com/en/api.html#res) object. It was the only available option until **Nest 4**. To inject the response object, we need to use `@Res()` decorator. To show the differences, i'm going to rewrite the `CatsController`:


### TypeScript
    #!ts

    import { Controller, Get, Post, Res, Body, HttpStatus } from '@nestjs/common';
    import { CreateCatDto } from './dto/create-cat.dto';

    @Controller('cats')
    export class CatsController {
        @Post()
        create(@Res() res, @Body() createCatDto: CreateCatDto) {
            // TODO: Add some logic here
            res.status(HttpStatus.CREATED).send();
        }

        @Get()
        findAll(@Res() res) {
            res.status(HttpStatus.OK).json([]);
        }
    }

### JavaScript
    #!js
    import { Controller, Get, Post, Bind, Res, Body, HttpStatus } from '@nestjs/common';

    @Controller('cats')
    export class CatsController {
        @Post()
        @Bind(Res(), Body())
        create(res, createCatDto) {
            // TODO: Add some logic here
            res.status(HttpStatus.CREATED).send();
        }

        @Get()
        @Bind(Res())
        findAll(res) {
            res.status(HttpStatus.OK).json([]);
        }
    }

This manner is much less clear from my point of view. I definitely prefer the first approach, but to make the Nest **backward compatible** with the previous versions, this method is still available. Also, the **response object** gives more flexibility - you've full control of the response.
