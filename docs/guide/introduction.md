## First Steps

In this set of articles you'll learn the **core fundamentals** of Nest. The main idea is to get familiar with essential Nest application building blocks. You'll build a basic CRUD application which features covers a lot of ground at an introductory level.

## Language

We're in love with [TypeScript](http://www.typescriptlang.org/), but above all - we love [Node.JS](https://nodejs.org/en/). That's why Nest is compatible with both TypeScript and **pure JavaScript**. Nest's is taking advantage of latest language features, so to use a framework with simple JavaScript we need a [Babel](http://babeljs.io/)</a> transpiler.

In the articles, we're mostly using TypeScript, but you can always **switch the code snippets** to the JavaScript version when it contains some TypeScript-specific expressions.

## Prerequisites

Please make sure that [Node.JS](https://nodejs.org/) (>= 6.11.0) is installed on your operating system.

## Setup
Setting up a new project is quite simple with [starter repository](https://github.com/kamilmysliwiec/nest-typescript-starter). Just make sure that you have [NPM](https://www.npmjs.com/) installed then use following commands in your OS terminal:

### TypeScript
    #!sh
    git clone https://github.com/nestjs/typescript-starter.git project
    cd project
    npm install

### JavaScript
    #!sh
    git clone https://github.com/nestjs/javascript-starter.git project
    cd project
    npm install


The `project` directory will contain several core files inside `src` directory.

```
src
└── server.ts
└── modules
    └── app.controller.ts
    └── app.module.ts
```

Following the convention, newly created modules should be placed inside `modules` directory.

| File                | Description                                                                                       |
| ------------------- | ------------------------------------------------------------------------------------------------- |
| `server.ts`         | The entry file of the application. It uses `NestFactory` to create the Nest application instance. |
| `app.module.ts`     | Defines `AppModule`, the root module of the application.                                          |
| `app.controller.ts` | Basic controller example with a single route.                                                     |

The `server.ts` includes an async function, which responsibility is to **bootstrap** our application:

    #!ts
    import { NestFactory } from '@nestjs/core';
    import { ApplicationModule } from './modules/app.module';

    async function bootstrap() {
        const app = await NestFactory.create(ApplicationModule);
        await app.listen(3000);
    }

    bootstrap();

To create a Nest application instance, we use the `NestFactory`. The `create()` method returns an object, which implements the `INestApplication` interface, and provides a set of usable methods, which are well described in the following guides.

## Running Your Application

Once the installation process is completed, you can run the following command to start the HTTP server:
```sh
$ npm run start
```
This command starts the HTTP server on the port defined inside the `server.ts` file in the `src` directory. While the application is running, open your browser and navigate to [`http://localhost:3000/`](http://localhost:3000/). If everything worked correctly, you should see the `Hello world!` message.
