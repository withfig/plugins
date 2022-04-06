# zsh-pyenv
> zsh plugin for installing, updating, and loading `pyenv`
> Inspired by [zsh-rbenv](https://github.com/cswl/zsh-rbenv)

## Usage
Once the plugin is installed, pyenv will be available. You will probably want to load this as one of your first plugins so that python/pip are available for other plugins that require them.

zsh-pyenv also wraps pyenv in some additional functionality.

### Upgrade
If you want to upgrade to the latest pyenv: `$ pyenv update`

## Installation

### Using [Antigen](https://github.com/zsh-users/antigen)
Bundle `zsh-pyenv` in your `.zshrc`

```
antigen bundle mattberther/zsh-pyenv
```

### Using [zplug](https://github.com/b4b4r07/zplug)
Load `zsh-pyenv` as a plugin in your `.zshrc`

```
zplug "mattberther/zsh-pyenv"
```

### Using [zgen](https://github.com/tarjoilija/zgen)
Include the load command in your `.zshrc`

```
zgen load mattberther/zsh-pyenv
```

### As an [Oh My ZSH!](https://github.com/robbyrussell/oh-my-zsh) custom plugin
Clone `zsh-pyenv` into your custom plugins repo and load as a plugin in your `.zshrc`

```shell
git clone https://github.com/mattberther/zsh-pyenv ~/.oh-my-zsh/custom/plugins/zsh-pyenv
```

```
plugins+=(zsh-pyenv)
```

Keep in mind that plugins need to be added before `oh-my-zsh.sh` is sourced.

### Manually
Clone this repository somewhere (`~/.zsh-pyenv` for example) and source it in your `.zshrc`

```shell
git clone https://github.com/mattberther/zsh-pyenv ~/.zsh-pyenv
```

```
source ~/.zsh-pyenv/zsh-pyenv.plugin.zsh
```

### License

MIT

