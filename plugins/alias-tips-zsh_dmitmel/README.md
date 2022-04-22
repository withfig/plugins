# alias-tips-zsh

A pure-ZSH re-implementation of the excellent [alias-tips](https://github.com/djui/alias-tips) plugin.

It works by trying to find a shell-defined alias for the command you are currently executing and printing a help line reminding you about that alias.

# Example

```bash
$ alias gc='git commit'
$ alias gca='git commit --all'

$ git commit
Alias tip: gc

$ gc --all
Alias tip: gca
```

# Limitations

- _Suffix_ and _global_ aliases are not supported. Only _prefix_ aliases ("command position") are supported. Check the [Zsh manual](http://zsh.sourceforge.net/Doc/Release/Shell-Builtin-Commands.html#Shell-Builtin-Commands) on `alias` for their definition.
