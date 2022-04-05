# README #

# This repository is no longer maintained!

alternative stack for PHP version managment in use: 
* `direnv`
  * see [direnv - documentation](https://direnv.net/)
* `zsh` + `oh-my-zsh` plugin `direnv`
* `php-version`
  * see [GitHub: wilmoore/php-version](https://github.com/wilmoore/php-version/blob/master/README.md)
* `.direnvrc`

```sh
use_php-version() {
  local php_version=$1

  phpversion_sh=$(brew --prefix php-version)/php-version.sh
  if [[ -e $phpversion_sh ]]; then
    source $phpversion_sh
    php-version $php_version
  fi
}
```
tested on **macOS Big Sur (11.6.5)**

## What is this repository for? ###

This Repo includes an simple *zsh plugin* for the shell command `php-version` to automatically switch between php versions if an rc-file is present.
This was heavily inspired by the [rvm](https://github.com/rvm/rvm) switch for .rvmrc files.


### Prerequirements

* `zsh` (duh) and `oh-my-zsh` (for plugin compatibility)
* `php-version` (used for the zsh plugin to automatically switch between php versions)
  * see [GitHub: wilmoore/php-version](https://github.com/wilmoore/php-version/blob/master/README.md)


### Setup

* Add the plugin into your zsh custom folder
  * See the documentation from [GitHub: robbyrussell/oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh/wiki/Customization)
* Add the plugin to your `.zshrc` and define an default PHP version to switch back to if there is no `.phpvrc` file:
```bash
plugins=(
    ...
    php-version_rcfile-switcher
    ...
)

PHPVRC_DEFAULT=7.2
```
* create an rc file with the name: `.phpvrc` and include the version, e.g.: `7.2`


### Where does it run?

This plugin was developed and tested on **macOS Mojave (11.14)** to work with `zsh`, `brew` and `php-version`. For everything else you get an "maybe".


### LICENSE 

Licensed under the [GNU General Public License v3.0](https://github.com/xellos866/php-version_rcfile-switcher/blob/master/LICENSE)

