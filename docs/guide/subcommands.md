# Subcommands

Say you have a category of commands that relate to a single action or group. One way you could do this is indicate that the first parameter is an "action" parameter, and parse it in your `execute()` method. The easier thing, though, would be to use a `SubcommandGroup`. This decorator lets us group together a set of commands with a common prefix.

## Import the `@SubcommandGroup()` decorator

The first thing we need to do is import the decorator from `@orbital/core`. This will give us access to the decorator.

    #!ts
    import { SubcommandGroup } from '@orbital/core';

## Creating our first subcommand group

Similarly to the `@CLI()` decorator, `@SubcommandGroup()` has two important properties: `name` and `declarations`. The `name` property is the prefix to all the commands included in the `declarations` array. In the `declarations` array, you can put commands, and even deeper-nested subcommand groups.

    #!ts
    @SubcommandGroup({
        name: 'remote',
        declarations: [
            RemoveCommand, // name: 'rm'
            ListSubcommand // name: 'add', subcommandname: 'origin'
        ]
    })
    export class Subcommand { }

## Example

The above commands would be executed like this:

    #!sh
    $ my-cli remote rm
    $ my-cli remote add origin