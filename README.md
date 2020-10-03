# Parameters

CLI application accepts 4 options (short alias and full name):

-s, --shift: a shift

-i, --input: an input file

-o, --output: an output file

-a, --action: an action encode/decode

Input and output parameters accept both absolute paths and relative paths

## Usage examples:

```$ node my_caesar_cli -a encode -s 7 -i ./input.txt -o ./output.txt```

```$ node my_caesar_cli --action encode --shift 7 --input plain.txt --output encoded.txt```

```$ node my_caesar_cli --action decode --shift 7 -i decoded.txt -o plain.txt```