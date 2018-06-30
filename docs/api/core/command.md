# Command

Type: **ClassDecorator**

The `Command` decorator declares an executable command instance.

## Properties

| Property      | Type       | Description                                                                                                                                                                                                                                                 | Example                   |
| ------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| `name`        | `string`   | The standard name for your command. This should be a full word, or a hyphenated phrase and should succinctly describe the function that will be executed. <br><br> Note: this will throw an error if the name is shared with another command                | `'new'`                   |
| `aliases`     | `string[]` | An optional array of strings that serve as shorthands for the command. Typically an abbreviation of the words or the first letter(s) of the command name. <br><br> Note: this will throw an error if any of the aliases are duplicate with another command. | `['n']`                   |
| `description` | `string`   | A summary of what the command does;                                                                                                                                                                                                                         | `'Creates a new project'` |

## Usage

    #!ts
    import { Command } from '@orbital/core';

    @Command({
        name: 'new',
        aliases: ['n'],
        description: 'Creates a new project'
    })