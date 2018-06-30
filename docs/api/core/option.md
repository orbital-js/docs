# Option

Type: **PropertyDecorator**

The `Option` decorator declares an option of a command.

## Properties

| Property      | Type       | Description                                                             | Example                           |
| ------------- | ---------- | ----------------------------------------------------------------------- | --------------------------------- |
| `name`        | `string`   | The name that users can invoke with double-dashes                       | `'help'`                          |
| `aliases`     | `string[]` | An optional array of short names that can be substituted for the option | `['h']`                           |
| `description` | `string`   | A summary of what the option does.                                      | `'Displays help for the command'` |

## Usage

    #!ts
    import { Option } from '@orbital/core';

    export class MyCommand {
        @Option({
            name: 'help',
            aliases: ['h'],
            description: 'Displays help for the command'
        }) showHelp: boolean;
    }