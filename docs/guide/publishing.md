# Publishing

Publishing your Orbital CLI is easy, and only takes a couple steps. This tutorial will show you how to publish to **npm**.

## TypeScript Configuration

The most common source of problems in building your Orbital project is because of your `tsconfig.json` file. Make sure that the `experimentalDecorators` and `emitDecoratorMetadata` properties are set to `true`. 

Also, we recommend building to ES6, and only including your main entry file.

    #!json
    // tsconfig.json
    {
        "compilerOptions": {
            ...
            "experimentalDecorators": true,
            "emitDecoratorMetadata": true,
            "target": "es6",
            ...
        },
        "include": [
            "src/main.ts"
        ]
    }

## Production Mode

Orbital has many runtime checks to make sure that you follow good naming practices, such as erroring when names are duplicated, or when an optional parameter precedes a required one. Also, Orbital generates helpful stack traces to tell you exactly where your error is. However, depending on the size of your project, this can have a serious toll on runtime performance. However, we can use `enableProdMode()` to disable those runtime checks, making performance faster for our users.

    #!ts
    // src/main.ts
    import { enableProdMode, OrbitalFactory } from '@orbital/core';

    enableProdMode();

    OrbitalFactory  
        .bootstrap(...) 

## Shebang

In order to make the command line aware that your program should be run as Node.JS, we need to include a "shebang" at the top of our main file. This will survive TypeScript compilation, and save your users a lot of headache.

    #!ts
    // src/main.ts
    #!/usr/bin/env node

## `package.json`

To let NPM know that your file should have a command-line name, we need to include the `bin` property in `package.json`. This will create a symlink to our main command executable file. If the command name is the same as your NPM package name, you can use the `bin` property as a string pointing to your entry file.

    #!json
    // package.json
    {
        "bin": "src/main.ts
    }

If you want your CLI to have a different name than the package, you must use `bin` as an object, where the key represents the executable name, and the value is the entry file.

    #!json
    // package.json
    {
        "name": "@orbital/cli",
        "bin": {
            "ob": "src/main.ts"
        }
    }

## Testing the command name

To build your CLI, run `tsc` in your project directory. This compiles your source down to useable JavaScript that Node can read and parse. Before publishing, run `npm link` to create a local symlink to simulate how your command line will run. Now, you can use the command name (either in `bin` or `name` property of package.json, depending on what you did in the previous step) to test your CLI and make sure everything works as you expect it to.

## Deploying to NPM

When you're ready to make your CLI available, you can publish it with `npm publish`. That's it! You've made your first Orbital CLI. Take a look around the [API docs](../../api) for more detailed documentation, and more features of Orbital not discussed in this guide.