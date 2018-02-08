# CLI

The CLI decorator is the primary consolidator of our CLI. We use the CLI decorator to store metadata about our CLI, as well as contain and resolve commands. In the future, the CLI decorator will be used to deal with dependency injection.

Decorators are a TypeScript feature that make it easier for Orbital developers to build their applications. Rather than dealing with ugly, inconsistent objects, Orbital allows you to use decorators to directly modify the class to which it is applied. Check out these comparisons:

    #!ts
    // Fun, pretty, and correct
    import { CLI } from '@orbital/core';

    @CLI({
        name: 'my-cli',
        commands: [
            //...
        ],
        version: '1.0.0'
    })
    export class MyCLI { }

Now, compare that beautiful example to this complex, non-immutable object:

    #!ts
    // WRONG!
    import { CLI } from '@orbital/core';

    export const myCli: CLI = {
        name: 'my-cli',
        commands: [
            // ...
        ],
        version: '1.0.0'
    }

Obviously, this is a little bit of an opinionated decision, but once you move past this syntax, Orbital is not very complex to learn.