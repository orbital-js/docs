# SubcommandGroup

Type: **ClassDecorator**

The `SubcommandGroup` decorator declares a group of commands with a common parent.

## Properties

| Property       | Type       | Description                                                                                                                                                                                                                                                       | Example                                         |
| -------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `name`         | `string`   | * The standard name for your subcommand group. This should be a full word, or a hyphenated phrase and should succinctly describe the group of functions that will be executed. <br><br> Note: this will throw an error if the name is shared with another command | `'remote'`                                      |
| `aliases`      | `string[]` | An optional array of strings that serve as shorthands for the command. Typically and abbreviation of the words or the first letter(s) of the command name. <br><br> Note: this will throw an error if any of the aliases are duplicate with another command.      | `['r']`                                         |
| `description`  | `string`   | A description of what the subcommands do collectively.                                                                                                                                                                                                            | `'Manipulate data on remote git repositories.'` |
| `declarations` | `any[]`    | Array of command and subcommand classes.                                                                                                                                                                                                                          | `[MyCommand, MySubcommand]`                     |

## Usage

    #!ts
    import { SubcommandGroup } from '@orbital/core';
    import { MyCommand } from './commands/my.command';
    import { FooSubcommand } from './foo/foo.subcommand.ts';

    @SubcommandGroup({
        name: 'remote',
        description: 'Manipulate data on remote git repositories.',
        aliases: ['r'],
        declarations: [
            MyCommand,
            MySubcommand
        ]
    })