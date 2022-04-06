# git-ignore

[![License: MIT][license icon]][license]

ZSH plugin. Generate `.gitignore` with templates from [gitignore.io][gitignore.io]
**offline**, taking the advantage of [`fzf`][fzf] fuzzy finder,
[`bat`][bat] syntax highlighting and ZSH completion.

![images/preview-01.jpg](../assets/images/preview-01.jpg?raw=true)

## Feature

Basically, this plugin is an offline variant of [gitignore.io][gitignore.io]
with ZSH goodies:
- imitating template generation behavior of [gitignore.io][gitignore.io] exactly
- fuzzy finder [`fzf`][fzf] selection with preview
- ZSH completion
- pull/update templates from command line (no need to update this plugin)

## Installation

### [Zplugin][zplugin]

The only ZSH plugin manager solves the time-consuming init for
`nvm`, `nodenv`, `pyenv`, `rvm`, `rbenv`, `thefuck`, `fasd`, etc,
with its amazing async [Turbo Mode][turbo mode].

```zsh
zplugin ice pick'init.zsh' blockf
zplugin light laggardkernel/git-ignore
alias gi="git-ignore"
```

Update the plugin with

```zsh
$ zplg update laggardkernel/git-ignore
```

### [Prezto][prezto]

The only framework does **optimizations** in plugins with sophisticated coding skill:
- [refreshing `.zcompdump` every 20h][prezto zcompdump 1]
- [compiling `.zcompdump` as bytecode in the background][prezto zcompdump 2]
- [caching init script for fasd][prezto fasd]
- saving `*env` startup time with [`init - --no-rehash` for `rbenv`, `pyenv`, `nodenv`][prezto *env]
- [removing the horribly time-consuming `brew command` from `command-not-found`][prezto brew command]

```zsh
mkdir -p ${ZDOTDIR:-$HOME}/.zprezto/contrib 2>/dev/null
git clone https://github.com/laggardkernel/git-ignore.git ${ZDOTDIR:-$HOME}/.zprezto/contrib/git-ignore
```

## Usage

```zsh
$ alias gi="git-ignore"

# Depends on fzf
$ gi # then press <Enter>

# Separate params with spaces or commas
$ gi macos linux windows vim emacs >> ./.gitignore

# Overwrite existing .gitignore
$ gi macos,linux,windows vim emacs >| ./.gitignore
```

### New CLI （`v1.1.0+`)

```zsh
❯ alias gi="git-ignore"

❯ gi -h
git-ignore 1.1.0 by laggardkernel <laggardkernel@gmail.com>
https://github.com/laggardkernel/git-ignore

Generates .gitignore files offline using templates from gitignore.io

Usage:
  git-ignore [options]
  git-ignore keyword1 keyword2 keyword3

Example:
  git-ignore macos,linux,windows vim emacs >> ./.gitignore

Options:
  -l, --list                List available templates
  -s, --search keyword      Search template with keyword in filenames
  -u, --update              Init/Update local templates repo
  -c, --clean               Clean local gitignore templates repo
  -h, --help                Display this help screen
  -v, --version             Display version information and exit

❯ gi -l
1C,1C-Bitrix,A-Frame,Actionscript,Ada,Adobe,AdvancedInstaller,Agda,AL...
# omitted because it is too long
Total: 479

❯ gi -s py # then press <Tab> for completion
pycharm      pycharm+all  pycharm+iml  pydev        python

❯ gi -u
[Info] Updating gitignore repo...
Already up to date.

❯ gi -c
[Info] No available local gitignore repo
[Info] Use `gi -u` to init
```

### Environment Variables
`GI_TEMPLATE`: location for templates storage. It fallbacks to:
1. `.git-ignore` directory under plugin's root folder
2. `${XDG_DATA_HOME}/git-ignore` (in case the script is not used as a ZSH plugin)
3. `$HOME/.local/share/git-ignore`

## Optional Dependencies
- [`fzf`][fzf]: Command-line fuzzy finder
- [`bat`][bat]: Syntax highlighting for `.gitignore` templates.

### Default Keybindings for `fzf`

| Keybind                                       | Action                  |
| :-------------------------------------------: | ----------------------- |
| <kbd>Enter</kbd>                              | Confirm                 |
| <kbd>Tab</kbd>                                | Toggle mark             |
| <kbd>?</kbd>                                  | Toggle preview window   |
| <kbd>Ctrl</kbd> - <kbd>R</kbd>                | Toggle selection        |
| <kbd>Alt</kbd> - <kbd>W</kbd>                 | Toggle preview wrap     |
| <kbd>Ctrl</kbd> - <kbd>K</kbd> / <kbd>P</kbd> | Selection up            |
| <kbd>Ctrl</kbd> - <kbd>J</kbd> / <kbd>N</kbd> | Selection down          |
| <kbd>Alt</kbd> - <kbd>K</kbd> / <kbd>P</kbd>  | Preview up              |
| <kbd>Alt</kbd> - <kbd>J</kbd> / <kbd>N</kbd>  | Preview down            |

## Todo

- [ ] Support all types of templates files from [dvcs/gitignore][dvcs/gitignore]
  - [x] Templates
  - [x] Patch
  - [x] Stack
  - [ ] Order
- [x] Remove unnecessary external dependencies: ~~`sed`~~, ~~`awk`~~
- [x] ZSH completion
  - [x] Separate `compdef` into file `functions/_git-ignore`
- [x] `git` sub-command `git ignore`
- [x] Options like `--list`, `--update`, `--search`, etc
- ~~[ ] Configure the plugin with `zstyle`~~
  - [x] custom template storage location with `GI_TEMPLATE`
- [ ] Script file compatible with BASH

## Related projects

[wfxr/forgit][wfxr/forgit]: [git-ignore][git-ignore] was designed to be a feature of
it. And generating `.gitignore` files **offline** was first introduced by me into it.
Later, [git-ignore](https://github.com/laggardkernel) is separated from forgit
because of disagreement on implementation.

[dvcs/gitignore][dvcs/gitignore]: The largest collection of useful `.gitignore`
templates, maintained by [https://www.gitignore.io][gitignore.io].

[simonwhitaker/gibo][simonwhitaker/gibo]: Another `.gitignore` generator using
templates from [github/gitignore][github/gitignore] written in POSIX sh.

## License

The MIT License (MIT)

Copyright (c) 2019 laggardkernel

Copyright (c) 2019 Wenxuan Zhang

[license icon]: https://img.shields.io/badge/License-MIT-yellow.svg
[license]: https://opensource.org/licenses/MIT
[gitignore.io]: https://www.gitignore.io/
[fzf]: https://github.com/junegunn/fzf
[bat]: https://github.com/sharkdp/bat
[dvcs/gitignore]: https://github.com/dvcs/gitignore
[zplugin]: https://github.com/zdharma/zplugin
[turbo mode]: https://github.com/zdharma/zplugin#turbo-mode-zsh--53
[prezto]: https://github.com/sorin-ionescu/prezto
[prezto zcompdump 1]: https://github.com/sorin-ionescu/prezto/blob/4abbc5572149baa6a5e7e38393a4b2006f01024f/modules/completion/init.zsh#L31-L41
[prezto zcompdump 2]: https://github.com/sorin-ionescu/prezto/blob/4abbc5572149baa6a5e7e38393a4b2006f01024f/runcoms/zlogin#L9-L15
[prezto fasd]: https://github.com/sorin-ionescu/prezto/blob/4abbc5572149baa6a5e7e38393a4b2006f01024f/modules/fasd/init.zsh#L22-L36
[prezto *env]: https://github.com/sorin-ionescu/prezto/blob/4abbc5572149baa6a5e7e38393a4b2006f01024f/modules/python/init.zsh#L22
[prezto brew command]: https://github.com/sorin-ionescu/prezto/blob/4abbc5572149baa6a5e7e38393a4b2006f01024f/modules/command-not-found/init.zsh
[wfxr/forgit]: https://github.com/wfxr/forgit
[git-ignore]: https://github.com/laggardkernel/git-ignore
[simonwhitaker/gibo]: https://github.com/simonwhitaker/gibo
[github/gitignore]: https://github.com/github/gitignore

