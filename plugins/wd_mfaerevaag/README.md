`wd` (*warp directory*) lets you jump to custom directories in zsh, without using `cd`.
Why?
Because `cd` seems inefficient when the folder is frequently visited or has a long path.

## Usage

* Add warp point to current working directory:

```zsh
wd add foo
```

If a warp point with the same name exists, use `wd add foo --force` to overwrite it.

**Note:** a warp point cannot contain colons, or consist of only spaces and dots.
The first will conflict in how `wd` stores the warp points, and the second will conflict with other features, as below.

You can omit point name to automatically use the current directory's name instead.

* From any directory, warp to `foo` with:

```zsh
wd foo
```

* You can also warp to a directory within `foo`, with autocompletion:

```zsh
wd foo some/inner/path
```

* You can warp back to previous directory and higher, with this dot syntax:

```zsh
wd ..
wd ...
```

This is a wrapper for the zsh's `dirs` function.  
_You might need to add `setopt AUTO_PUSHD` to your `.zshrc` if you are not using [oh-my-zsh](https://github.com/ohmyzsh/ohmyzsh)._

* Remove warp point:

```zsh
wd rm foo
```

You can omit point name to use the current directory's name instead.

* List all warp points (stored in `~/.warprc` by default):

```zsh
wd list
```

* List files in given warp point:

```zsh
wd ls foo
```

* Show path of given warp point:

```zsh
wd path foo
```

* List warp points to current directory, or optionally, path to given warp point:

```zsh
wd show
```

* Remove warp points to non-existent directories.

```zsh
wd clean
```

Use `wd clean --force` to not be prompted with confirmation.

* Print usage info:

```zsh
wd help
```

The usage will be printed also if you call `wd` with no command

* Print the running version of `wd`:

```zsh
wd --version
```

* Specifically set the config file (default being `~/.warprc`), which is useful for testing:

```zsh
wd --config ./file <command>
```

* Force `exit` with return code after running. This is not default, as it will *exit your terminal*, though required for testing/debugging.

```zsh
wd --debug <command>
```

* Silence all output:

```zsh
wd --quiet <command>
```