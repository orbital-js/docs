# Commands

Commands are the actual executable part of your Orbital project. They contain the code and metadata for actions that your users want to invoke from the command line.

Commands also house metadata for options and parameters, which will come later in this guide. For now, we will focus on making a very simple "hello, world" command.

## Importing the Command decorator

The first thing you want to do is import the `Command` decorator from `@orbital/core`. This will notify the Orbital runtime that it is working with a valid command instance.

    #!ts
    import { Command } from '@orbital/core';

## Scaffolding an Executable class

Now, we need to attatch that decorator to a class that Orbital can execute. We'll do this by `decorating` the class, and making that class extend the `Executable` superclass.

    #!ts
    import { Command, Executable } from '@orbital/core';

    @Command({
        name: 'say-hello'
    })
    export class HelloCommand extends Executable {
        execute() {
            // everything in here will be run
        }
    }

Take notice is the object within the decorator. That is all metadata for the Orbital runtime. The `name` property used in this example will be the command the user enters to make the code in `execute()` run.

## Importing into CLI

The last thing we need to do is import this new command into our CLI's declarations array so that Orbital can be aware of it.

    #!ts
    import { HelloCommand } from './commands/say-hello.command';
    ...
    @CLI({
        ...
        declarations: [
            HelloCommand
        ]
        ...
    })
    export class MyCLI { }

That's it! You've just written your first command with Orbital!