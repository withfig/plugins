LAST UPDATE:2022-04-03

# docker-zsh-completion
Zsh completion for [docker](http://docker.io) and [docker-compose](https://github.com/docker/compose).
Completion files on the original repositories are automatically imported to this repository every week. The batch application is running to update them (please refer to [execute.sh](/execute.sh) which is used by the batch).


Please follow the following instructions to import completion files (After the instllation, they are registered to zsh's `fpath`).

## Installation

### For [zplug](https://github.com/zplug/zplug) users:

```sh
zplug "greymd/docker-zsh-completion"
```

### For [Antigen](http://antigen.sharats.me/) users:

```sh
antigen bundle "greymd/docker-zsh-completion"
```

## Why it is helpful?
It is good to manage completion files with Zsh's plugin managers. Because it is easy to delete particular completion function no longer used.
However, plugin managers clone whole repositories for each plugin. Completion file for `docker` command is in the [`docker/cli`](https://github.com/docker/cli) repository. But it has slightly big repository size. It is waste of the disk space to download whole of the repository only for single Zsh completion file. The reason why I made it.

