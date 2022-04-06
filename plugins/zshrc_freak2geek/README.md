# zshrc

A zsh plugin to load local ".zshrc" files from your project scopes.

## Why

[Oh My Zsh](https://ohmyz.sh/) is a terminal implementation that raises up your productivity by featuring handy functionality.
Besides, you are enabled to describe your own functionality for each of the projects you work on. However, this customization must be loaded, synchronized and shared manually. This plugin means to help on the automation of such process.

## How

You don't need anymore to describe the custom functionality for your projects within the `$ZSH_CUSTOM` context. Instead, you can create `.zshrc` files within the root folder of your projects. Then, once you access to the folder containing such configuration, every custom functionality will be loaded and ready to go.

You have gained synchronization and shareability as you can include your zsh configuration as part of the code repository of your project and automation thanks to this plugin.

## Get started

### Requirements

- Unix-like operating system (macOS or Linux)

- [OhMyZsh](https://ohmyz.sh/)

- curl

- git

### Automatic setup

``` bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/freak2geek/zshrc/master/install.sh)"
```

The new terminal instances will support now local `.zshrc` configurations. Enjoy!

### Manual setup

- Download the `zshrc.plugin.zsh` file from this repository.

- Import the plugin within you custom plugin folder. Commonly, `~/.oh-my-zsh/custom/plugins`. But you can check `$ZSH_CUSTOM` env var.

``` shell
$ZSH_CUSTOM
└── plugins
    └── zshrc
        └── zshrc.plugin.zsh
```

- Add the plugin within `~/.zshrc` file.

``` shell
plugins=(git bundler zshrc)
```

## References

- Check out: [Oh My Zsh](https://ohmyz.sh/)

- Read: [How to add a new plugin in zsh](https://github.com/robbyrussell/oh-my-zsh/wiki/Customization#adding-a-new-plugin)

