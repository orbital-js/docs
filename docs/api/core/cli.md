# CLI

Type: **ClassDecorator**

The CLI decorator provides the metadata for the entire CLI program.

## Properties

| Property       | Type     | Description                                                       | Example                     |
| -------------- | -------- | ----------------------------------------------------------------- | --------------------------- |
| `name`         | `string` | The `bin` name of the command, as it will be invoked by the user. | `'ob'`                      |
| `prettyName`   | `string` | A cleaner, properly capitalized version of your CLI.              | `'The Orbital CLI'`         |
| `version`      | `string` | The current version of your CLI package, as seen in package.json. | `'v1.0.3'`                  |
| `declarations` | `any[]`  | Array of command and subcommand classes.                          | `[MyCommand, MySubcommand]` |

## Usage

    #!ts
    import { CLI } from '@orbital/core';
    import { MyCommand } from './commands/my.command';
    import { FooSubcommand } from './foo/foo.subcommand.ts';

    @CLI({
        name: 'ob',
        prettyName: 'The Orbital CLI',
        version: 'v1.0.3',
        declarations: [
            MyCommand,
            MySubcommand
        ]
    })