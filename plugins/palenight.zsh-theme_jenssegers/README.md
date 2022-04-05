## Material Palenight ZSH theme

![screenshot](screenshot.png)

## Installation

Requires you to have [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh) installed.

### Manual

```bash
wget -O ~/.oh-my-zsh/themes/palenight.zsh-theme \
https://raw.githubusercontent.com/jenssegers/palenight.zsh-theme/master/palenight.zsh-theme
```

Then go to your `~/.zshrc` file and set `ZSH_THEME="palenight"`

### Zplug

```
zplug "jenssegers/palenight.zsh-theme", as:theme
```

### Antigen

```
antigen theme jenssegers/palenight.zsh-theme palenight
```

## Configuration

There's an environment variable you can set to display your host. Simply add this to your `.zshrc`:

```bash
export ZSH_THEME_SHOW_HOST=true
```

![screenshot](screenshot-with-host.png)

