# asdf.plugin.zsh

Zsh integration and completions for [asdf](https://github.com/asdf-vm/asdf), the extendable version manager, with support for Ruby, Node.js, Elixir, Erlang and more.

## Installation

### Using [zplug](https://github.com/zplug/zplug)
Load asdf.plugin.zsh as a plugin in your `.zshrc`

```shell
zplug "kiurchv/asdf.plugin.zsh", defer:2

```
### Using [zgen](https://github.com/tarjoilija/zgen)

Include the load command in your `.zshrc`

```shell
zgen load kiurchv/asdf.plugin.zsh
zgen save
```

### Using [Antigen](https://github.com/zsh-users/antigen)

Bundle asdf.plugin.zsh in your `.zshrc`

```shell
antigen bundle kiurchv/asdf.plugin.zsh
antigen apply
```

### As an [Oh My Zsh](https://github.com/robbyrussell/oh-my-zsh) custom plugin

Clone asdf.plugin.zsh into your custom plugins repo

```shell
git clone https://github.com/kiurchv/asdf.plugin.zsh $HOME/.oh-my-zsh/custom/plugins/asdf
```
Then load as a plugin in your `.zshrc`

```shell
plugins+=(asdf)
```

## Caveats

As this plugin loads asdf's bash completions adopted for zsh using `bashcompinit` function, make sure that there are no `compinit` calls after the point where it sourced.

