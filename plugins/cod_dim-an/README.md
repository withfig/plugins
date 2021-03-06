Cod is a completion daemon for `{bash,fish,zsh}`.

It detects usage of `--help` commands parses their output and generates
auto-completions for your shell.

![](https://asciinema.org/a/h0SrrNvZVcqoSM4DNyEUrGtQh.svg)

Cod checks each command you run in the shell. When cod detects usage of
`--help` flag it asks if you want it to learn this command. If you choose
to allow cod to learn this command cod will run command itself parse the
output and generate completions based on the `--help` output.

## Download Binary
[Download](https://github.com/dim-an/cod/releases) or build and put the
path to `cod`
in your `$PATH`

Build:
```
git clone https://github.com/dim-an/cod.git
cd cod
go build
```

or

```
go get -u github.com/dim-an/cod
```

### How cod detects help commands
Cod performs following checks to decide if command is help invocation:
- checks if `--help` flag is used;
- checks that command is simple i.e. doesn't contain any pipes, file
    descriptor redirections, and other shell magic;
- checks that command exit code is 0.

If cod cannot automatically detect that your command is help invocation
you can use `learn` subcommand to learn this command anyway.

### How cod runs help commands
Cod always uses absolute paths to run program. (So it finds binary in
`PATH` or resolves relative path if required). Other arguments except
binary path are left unchanged.

Current shell environment and current shell working directory will be
used.

If program is successfully executed cod will store:
- absolute path to binary;
- used arguments;
- working directory;
- environment variables.
This info will be used to update command if required (check:
`cod help update`).

### How cod parses help output
`cod` has generic parser that works with most of help pages and
recognizes flags (starting with `-`) but doesn't recognize subcommands.

It also has a special parser tuned for
[[https://docs.python.org/library/argparse.html][python argparse library]]
that recognizes flags and subcommands.

## Configuration

Cod will search config in `$XDG_CONFIG_HOME/cod/config.toml` file
(default: `~/.config/cod/config.toml`).

Config file allows to specify rules to ignore executables or always trust
them.

`cod example-config` prints example configuration to stdout.
`cod example-config --create` writes example configuration to proper config
file.

## Data directories
Cod uses `$XDG_DATA_HOME/cod` (default: `~/.local/share/cod`) to store all
generated data files.
