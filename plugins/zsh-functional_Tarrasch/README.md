# ZSH higher order functions

You can look at [yogsototh's blogpost] for the idea of higher order functions
in zsh.

## Examples and usage

Here are some examples:

    $ mapa '$1*2' {1..3}
    2
    4
    6

    $ folda '$1+$2' {1..5}
    15

    $ folda '$acc+$x' {1..5}
    15

    $ filter 'echo $1|grep a >/dev/null' ab cd ef ada
    ab
    ada

    $ map 'X $1:t Y' ~/.zsh/functional/src/*
    X each Y
    X filter Y
    X fold Y
    X map Y

    $ map 'result $1' $(mapa '$1+5' $(mapa '$1*2' {1..3}))
    result 7
    result 9
    result 11

    $ echo "1\n2\n3" | mapa '$1*2' | mapa '$1+5' | map 'result $1'
    result 7
    result 9
    result 11

Here are some examples with named functions:

    $ insideXY(){print -- "X $1 Y"}
    $ eachf insideXY a b c d
    X a Y
    X b Y
    X c Y
    X d Y

    $ add(){print -- $(($1+$2))}
    $ foldf add {1..5}
    15

Please refer to the tests for complete specifications. The advantages of the
[cram] tests are that they are validated and readable.

Furthermore, the commands will print out their `--help` if they are provided no
arguments.

### Naming conventions

I found the lambda expression versions most useful hence they have the shortest
(plain) name. Functions ending with an `f` are those taking in a *named
function* and functions ending with an `a` will take an *arithmetic lambda
expression*. The examples above should clarify the syntax.

### `map` or `each`?

`map` is simply `each` with an implicit `echo`, it should feel somewhat
intuitive for ruby developers. Note how `mapa` exists but not `eacha`, and the
contrary for `mapf` and `eachf`.

### Reading from standard input

All functions will read from stdin if no arguments are given to them.  Please
see `tests/filter.t` For a test that *lazily* generates the first 10 primes.

## Contributing

Good idea! Just add a test and implement the new functionality and send away
your pull request! :)

### Running the tests

We test like [antigen does testing][antigen-tests].

## Creds

Yann Esposito for the *HoF* idea and big thanks to [Sterling's blogpost] for
discovering and starting implementing the anonymous function features.

[yogsototh's blogpost]: http://yannesposito.com/Scratch/en/blog/Higher-order-function-in-zsh/
[Sterling's blogpost]:  http://nicholassterling.wordpress.com/2012/03/30/a-zsh-map-function/
[antigen]: https://github.com/zsh-users/antigen
[cram]: https://bitheap.org/cram/
[antigen-tests]: https://github.com/zsh-users/antigen#running-the-tests
[travis-status]: https://travis-ci.org/Tarrasch/zsh-functional
[travis-status-png]: https://travis-ci.org/Tarrasch/zsh-functional.png?branch=master

