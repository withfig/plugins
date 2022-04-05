# git-sync [![Build Status](https://travis-ci.org/caarlos0/zsh-git-sync.svg?branch=master)](https://travis-ci.org/caarlos0/zsh-git-sync)

Sync git repositories and clean them up.

![a gif showing git-sync in action](/git-sync.mov.gif)

## Define `sync`

- prune `origin` or `upstream`;
- merge `upstream` into current branch;
- push merged branch to fork (`origin`);
- remove merged branches.

## Install

```console
$ antibody bundle 'caarlos0/zsh-git-sync kind:path'
```

Or use `antigen` to load it as a shell plugin.

## Usage

If you used antibody, the folder will be cloned and added to your `$PATH`,
so, calling `git sync` will just work out of the box.


Otherwise, you'll need to add it to your git config:

```console
$ git config --global alias.sync '!zsh -ic git-sync'
```

There is also `git delete-local-merged`, which only deletes
locally merged branches (part of the cleanup thing).

Again, with antibody, `git delete-local-merged` will just work, otherwise:

Example:

```console
$ git config --global alias.delete-local-merged '!zsh -ic git-delete-local-merged'
```

