# zsh-dircolors-solarized

[Solarized dircolors](https://github.com/seebi/dircolors-solarized) plugin for
zsh.

## Installation

Note that after installing this plugin, the terminal must be restarted or a new terminal session must be created.

### Manual

1. Clone this repository somewhere on your computer. For example:

    ```sh
    git clone --recursive https://github.com/joel-porquet/zsh-dircolors-solarized ~/.zsh/zsh-dircolors-solarized
    ```

2. Add the following snippet to your `.zshrc`:

    ```sh
    source ~/.zsh/zsh-dircolors-solarized/zsh-dircolors-solarized.zsh
    ```

### Antigen

I recommend using [antigen](https://github.com/zsh-users/antigen), but it is
also compatible with other plugin managers.

1. Add the following line in your `.zshrc`:

    ```
    antigen bundle joel-porquet/zsh-dircolors-solarized.git
    ```

### Oh-my-zsh

1. Clone this repository into `$ZSH_CUSTOM/plugins` (by default `~/.oh-my-zsh/custom/plugins`)

    ```sh
    git clone --recursive https://github.com/joel-porquet/zsh-dircolors-solarized $ZSH_CUSTOM/plugins/zsh-dircolors-solarized
    ```

2. Add the plugin to the list of plugins for Oh My Zsh to load:

    ```sh
    plugins=(zsh-dircolors-solarized)
    ```

## Usage

This plugin offers two commands:

* `lssolarized` which lists the available solarized themes. For now there are:
    * `dircolors.ansi-universal` (universal theme for 16- and 256-color terminals)
    * `dircolors.ansi-dark` (optimized version of universal for dark background)
    * `dircolors.ansi-light` (optimized version of universal for light background)
    * `dircolors.256dark` (degraded solarized dark theme)

* `setupsolarized` which installs a theme and saves the current configuration to
  the configuration file (`$HOME/.zsh-dircolors.config` by default). Without any
  argument, `setupsolarized` will use the theme `dircolors.ansi-universal`.
  
`setupsolarized` must be run at least once in order to create the configuration file. After doing so, the plugin will automatically load your configuration each time a zsh session is started.

## OSX Support
A required command for this library is `dircolors`. This command is not available on OSX. Instead, `gdircolors`
is provided through Homebrew.

1. Install core-utils.
    ```
    brew install coreutils
    ```
2. Add the following alias to your `.zshrc` anywhere prior to where this plugin is installed.
    ```
    alias dircolors='gdircolors'
    ```

