# Executable

Type: **Class**

The `Executable` class is an abstract class designed to be extended by command classes. Currently, it typechecks, ensuring that commands have an `execute()` function, but it may have more properties in the future.

## Properties

| Property  | Type                       | Description                                                                                               | Example                            |
| --------- | -------------------------- | --------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| `execute` | `(...args: any[]) => void` | The main method for the command to run. This is an abstract property, so it must be defined in your code. | `execute() { console.log('foo') }` |


## Usage

    #!ts
    import { Command, Executable } from '@orbital/core';

    @Command({
        name: 'foo'
    })
    export class FooCommand extends Executable {
        execute() {
            console.log('foo')
        }
    }