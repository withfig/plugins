# goenv
### Antigen plugin to manage $GOPATH similarly to Python's virtualenvwrapper.

I'm sure this can also be used with vanilla oh-my-zsh (or prezto), but I'm not
sure exactly how. If you figure it out - please open a pull request, as I'd love
to know.

## installation

In `.zshrc`:

```sh
antigen-use oh-my-zsh
antigen bundle bbenne10/goenv
antigen apply
```

In `.zshenv`:
```sh
export GO_ENV=~/.goenvs
```

`$GO_ENV` works exactly the same as `$WORKON_HOME` in virtualenvwrapper's world.
It answers the questions "Where should centralized go environments be stored?"
*Note:* Should this env variable be unset, it will be initalized on plugin load
to `$HOME/.goenvs`.

## usage
This exports two main functions:

* `make_go_workspace` - To create new workspaces under `$GO_ENV`. Takes one
argument: the workspace name to make.

* `goworkon` -  To use a particular workspace which has been created previously.
Takes one argument: the workspace name to begin work on.

## TODO
* function (similar to pyenv, virtualenv{,wrapper} and git plugins) to add
$GOPATH to $PS1
* `remove_go_workspace` (== `rmvirtualenv` from virtualenvwrapper)
* `deactivate` support. This should restore the $GOPATH that was present before
we set it.

