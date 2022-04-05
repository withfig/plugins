# zsh-git-smart-commands

Wrappers for common git commands so they can be used in aliases very
efficiently.

All commands come with default git completion.

# Installation

## zgen

```zsh
zgen load seletskiy/zsh-git-smart-commands
```

## git-smart-commit

With arguments same as `git commit -m`. Without arguments behaves like `git
commit -v`.

Also, removes necessity of quotes around commit message.

```zsh
alias c='git-smart-commit'
```

Then, commits can be done via:

```zsh
c my supper commit message
```

Autocompletion always works:

```zsh
c my blah blah --am<TAB>
# ==> c my blah blah --amend
```

**Note**: quotes are not mandatory now.

## git-smart-add

```zsh
alias a='git-smart-add'
```

Without arguments will add all files in the repo to the index. Otherwise will
act as specified in commmand line.

## git-smart-push

```
alias p='git-smart-push seletskiy'
```

Seek for remote named as first argument, and if it is found,
then push changes to that remote.

Otherwise push to origin.

## git-smart-pull

```zsh
alias u='git-smart-pull'
```

If working directory is dirty, then first stash changes, pull
remote and pop changes back.

## git-smart-remote

```zsh
alias r='git-smart-remote'
```

If repo do not have remote yet, will add new remote named
origin with url specified as first argument.

