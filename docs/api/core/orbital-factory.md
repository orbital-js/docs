# OrbitalFactory

Type: **Class**

The `OrbitalFactory` class contains all of the Orbital runtime and parsing. It bootstraps and maps all of the commands in `declarations`, parses the command line input, and pipes that input into the execution.

## Properties

| Property    | Type                                 | Description                            |
| ----------- | ------------------------------------ | -------------------------------------- |
| `bootstrap` | `(cli: any) => typeof OrbitalFactory | Generates a map of executable commands |
| `execute`   | `(argv: string[]) => void`           | Parses and executes the program        |


## Usage

    #!ts
    import { OrbitalFactory } from '@orbital/core';
    import { MyCLI } from './cli';

    OrbitalFactory
        .bootstrap(MyCLI)
        .execute(process.argv)