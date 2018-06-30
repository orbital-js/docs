# Param

Type: **ParameterDecorator**

The `Param` decorator declares an parameter of a command.

## Properties

| Property      | Type      | Description                                                                        | Example                               |
| ------------- | --------- | ---------------------------------------------------------------------------------- | ------------------------------------- |
| `name`        | `string`  | The name that shows up in help as a parameter of the command                       | `'url'`                               |
| `required`    | `boolean` | A boolean representing whether or not the parameter is mandatory. Default: `false` | `true`                                |
| `description` | `string`  | A summary of what the parameter does.                                              | `'The URL for the image to download'` |

## Usage

    #!ts
    import { Param } from '@orbital/core';

    export class MyCommand {
        execute(
            @Param({
                name: 'url',
                required: true,
                description: 'The URL for the image to download'
            }) imageUrl: string
        )
    }