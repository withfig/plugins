# zeesh!
                                 __
                         __     / /
     ____  ____ ___ ____/ /_   / /
    /_  / / __/ __// __/ __ \ /_/
     / /_/ __/ __/_\ \  / / /__
    /___/___/___/____/_/ /_/__/

Zeesh is a cross-platform [Zsh][zsh] framework. It's similar to, but incompatible
with, [oh-my-zsh][oh-my-zsh]. It has a modular plugin architecture making it
easy to extend. It has a rich set of defaults, but is designed to be as
lightweight as possible.

## Installation
Clone to `~/.zsh` or use the install script:

```sh
curl https://raw.github.com/zeekay/zeesh/master/scripts/install.sh | sh
```

## Configuration
Specify the plugins you want to use in the `zeesh_plugins` array and source
`~/.zsh/zeesh.zsh`:

```sh
zeesh_plugins=(
    autocomplete
    osx
    git
    javascript
    yarn
    vcs-info
    syntax-highlighting
    history-substring-search
    theme
    vi-mode
    vi-visual-mode
)

source ~/.zsh/zeesh.zsh
```

You can enable various features using the available plugins. For a list of available plugins:

```sh
ls ~/.zsh/plugins
```

[oh-my-zsh]: https://github.com/robbyrussell/oh-my-zsh
[zsh]: http://www.zsh.org

