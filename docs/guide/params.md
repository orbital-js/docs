# Parameters

A powerful way to let your users pass in custom data is with parameters. More often than not, your commands will have some sort of data input that is needed for it to function. Parameters supply a way for us to get that user data.

## Example

In this example, `[projectName]` is the parameter. We would use a parameter here, rather than an [option](./options), because the Orbital CLI requires users to pass in a project name, and this command would fail without it.

    #!sh
    ob new [projectName]

## Importing the Param decorator

The first thing we need to do is import the Param decorator. This decorator notifies the Orbital runtime to look for a parameter in the command input.

    #!ts
    import { Param } from '@orbital/core';

## Creating our first parameter

TypeScript has five types of decorators, detailed [here](http://www.typescriptlang.org/docs/handbook/decorators.html). In the previous examples, we have used class decorators to decorate commands and CLI classes. The `@Param()` decorator is a **parameter** decorator, meaning it decorates a parameter of a function.

    #!ts
    ...
    export class MyCommand extends Executable {
        execute(
            @Param() name: string,
        ) {
            console.log('Hello, ' + name);
        }
    }

## Default parameter values

If we were to run this command without passing in a name, it would simply log out `Hello, `. If we wanted to assign it a default value, we can use TypeScript/ECMAScript's default value feature.

    #!ts
    ...
    @Param() name: string = 'world',
    ...

!!!warning
    Make sure to leave type of the parameter explicitly. The Orbital runtime consumes these type annotations for help generation, so leaving them in place ensures that help is properly generated.

## Required parameters

If we want to force our users to enter a value for the parameter, we can use the `required` key in the optional parameter metadata. Any default values you set will be overridden, and the command will throw an error if the user forgets to include the parameter.

    #!ts
    @Param({
        required: true
    }) name: string,

## Conclusion

Parameters are a great way to encourage users to pass data into your commands. Orbital makes it extremely easy to jump into building your own dynamic command lines with parameters.