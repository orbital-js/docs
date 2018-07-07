# CLI

Type: **Function**

`enableProdMode` supresses error output and tedious runtime checks to improve performance. It's basically the "I know what I'm doing, don't check anything" button for Orbital.

## Usage

    #!ts
    import { OrbitalFactory, enableProdMode } from '@orbital/core';
    import { MyCLI } from './cli';

    enableProdMode();

    OrbitalFactory
        .bootstrap(MyCLI)
        .execute(process.argv);