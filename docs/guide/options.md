# Options

In the previous guide, we discussed how parameters can be used to pass in dynamic data to your commands. Another way we can create dynamic commands is with **options**. The main difference between parameters and options is that parameters are *implicitly* defined, and options are *explicitly* defined. Assosciating parameters with variables in your program is based on the order in which they appear in the command line; **options**, on the other hand, are assosciated directly with a flag, and will not work without this flag indicating that the user wants to use an option.

## Examples

Options come in many shapes and sizes, and have a variety of syntaxes and use cases. Most commonly, they will be used as flags or to add supplemental information.

For the sake of these examples, we will assume that the `cli say hello` command is a simple console logging command, with the message "hello".

### Options as flags

Flags are typically of `boolean` type, and manipulate the command in a way that doesn't require additional data. That is, the options can be passed without an input, and the meaning will be interpreted.

    #!sh
    cli say hello --red --bold

These flags do exactly what you would expect them to: they make our output bold and color it red. No value needs to be passed in, since they work on their own and are self-contained. That is directly opposite using flags for supplemental information.

### Options for supplemental information

What if we wanted to have more open-ended colors and styles for our users, rather than just bold and red? For that, we can use options with values.

    #!sh
    cli say hello --color red --style=bold

You'll notice that the equal sign is optional, so you and your users are free to use whatever syntax they prefer. In this example, the values "red" and "bold" will be passed directly into your class for you to parse on your own. This provides a much more open-ended way to allow users to pass in whatever data they want, and subsequently, suffer the consequences if the input is not properly formatted.

## Importing the Option decorator

We first need to import the `@Option` decorator. This will notify the Orbital runtime that there are options available on the command, and will populate them into the class.

    #!ts
    import { Option } from '@orbital/core';

## Creating our first option

Unlike parameters, Options come in as property decorators. If you've used Angular, examples of property decorators are `@Input()` and `@ViewChild()`. The option decorator notifies the Orbital runtime that these options exist in the command class, and when the command is instantiated, the user's input is parsed and injected into the class.

Since `@Option()` decorates properties, the options we create will be properties on our executable command class. In the example below, `colorizeOutput` is a made-up function that will colorize the output to whatever the user inputs.

    #!ts hl_lines="3 4 11 10"
    export class MyCommand extends Executable {

        @Option() color: string; // as additional data
        @Option() bold: boolean; // as a flag

        execute(
            @Param() message: string
        ) {
            let output: string;
            output = colorizeOutput(message, this.color);
            if (this.bold) {
                makeBold(output);
            }
            console.log(output);
        }
    }

## Default option values

Similarly to parameters, we can set default values of options using TypeScript's default value syntax. This precludes the need to add complex checking default value logic to your execution function (since the variable will always be defined).

    #!ts
    @Option() color: string = 'green';

!!! question "What about required options?"
    Common CLI design encourages putting all required inputs as params, not options. Options are designed to optionally manipulate the user's input, but are by no means required for the function to run. Any required inputs should be converted to [params](./params).

## Conclusion

Options are a powerful way to add function to your CLI program. By adding additional unobtrusive user control points to your program, you make both beginner and advanced users happier to use your software.