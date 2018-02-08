# Introduction

## First Steps

The Guide will lead you through building your first Orbital CLI, and will go over the fundamentals of the Orbital framework.

## Language

Orbital is built with [TypeScript](https://www.typescriptlang.org), and we recommend developers do the same. Orbital has not been rigorously tested with pure JavaScript, and the documentation will have exclusively TypeScript examples.

## Prerequisites

Please make sure that [Node.JS](https://nodejs.org/) (>=6.0.0) is installed on your operating system. We recommend Node 8 or later. You will also need TypeScript v2.7 or later, and NPM v3 or later.

## Setup

Setting up a new project is quite simple with the [starter](https://github.com/orbital-js/starter). You can clone the repo and get started with these commands:

    #!sh
    git clone https://github.com/orbital-js/starter project-name
    cd project-name
    npm install

The `project` directory will contain several core files inside `src` directory.

```txt
src
└── main.ts
└── cli.ts
└── commands
    └── hello.command.ts
```

These files each serve an important and unique purpose, outlined in the table below.

| File                        | Description                                                                        |
| --------------------------- | ---------------------------------------------------------------------------------- |
| `main.ts`                   | The entry point to your CLI. Provides bootstrapping logic to render the CLI.       |
| `cli.ts`                    | Defines the primary CLI instance of the application.                               |
| `commands/hello.command.ts` | A single executable command with business logic for when the command is triggered. |

The `main.ts` includes an single function, which responsibility is to **bootstrap** our application:

    #!ts
    import { OrbitalFactory } from '@orbital/core';
    import { MyCLI } from './cli';

    OrbitalFactory.bootstrap(MyCLI)
        .execute(process.argv);

To instantiate the application, the `bootstrap` method handles all of the command resolution and injection. The `execute` method accepts an array of strings, typically `process.argv`, as the command line input. It can be useful, however, to substitute in other arrays, particularly during testing. We will cover this in a later guide.

## Running Your CLI

Once you've downloaded and installed the starter, you can run this command to make sure that everything is configured properly.

```sh
$ npm start -- hello
Welcome to Orbital CLI!
```

If everything worked correctly, you'll see "Welcome to Orbital CLI!" output below the command.
