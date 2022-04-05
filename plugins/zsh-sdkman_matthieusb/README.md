# Sdkman Zsh plugin

This sdkman plugin aims at making [sdkman](https://sdkman.io) usage easier with completion scripts.

![zsh-sdkman usage gif](./zsh-sdkman-usage.gif?raw=true "Optional Title")
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fmatthieusb%2Fzsh-sdkman.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fmatthieusb%2Fzsh-sdkman?ref=badge_shield)

## Installation

zsh-sdkman is not bundled with ZSH, so you need to install it.

### [Antigen](https://github.com/zsh-users/antigen)

This plugin can be installed by adding `antigen bundle matthieusb/zsh-sdkman` to your `.zshrc` file. [Antigen](https://github.com/zsh-users/antigen) will handle cloning the plugin for you automatically the next time you start `zsh`. You can also add the plugin to a running ZSH session with `antigen bundle matthieusb/zsh-sdkman` for testing before adding it to your `.zshrc`.

### [Zgen](https://github.com/tarjoilija/zgen)

This plugin can be installed by adding `zgen load matthieusb/zsh-sdkman` to your `.zshrc` file in the same function you're doing your other `zgen load` calls in. [Zgen](https://github.com/tarjoilija/zgen) will automatically clone the repositories for you when you do a `zgen save`.


### [Simple Oh-My-Zsh/Manual install](http://ohmyz.sh/)

Go to your *oh-my-zsh* folder and then in *custom/plugins* and clone this repository:

```
git clone https://github.com/matthieusb/zsh-sdkman.git
```

And then, add to to your *.zshrc* plugin list like this:

```
plugins=(... zsh-sdkman)
```

**note:** cloning of zsh-sdkman requires the [Git Large File Storage](https://git-lfs.github.com/) Git extension.

## Dependencies

There are several packages that you'll need for this plugin to work:
* sdkman of course
* `date`
* `grep` and `egrep`
* `sed`
* `awk`

## Usage

### First launch and completion update

On first launch, the script has to compute a few things in order to make the completion scripts work. It can take a while (I'd say five minutes tops) to be done so be patient.
This operation is repeated every 12 hours automatically.

**IMPORTANT**: if you do new installations on your sdkman candidate or just play around with new versions, uninstallations or updates, **DON'T FORGET** to refresh the completion script files with the following command:

```
sdk-refresh-completion-files
```

### Usage help

Sdkman can be used as usual:

```
Usage: sdk <command> [candidate] [version]
       sdk offline <enable|disable>

   commands:
       install   or i    <candidate> [version]
       uninstall or rm   <candidate> <version>
       list      or ls   [candidate]
       use       or u    <candidate> [version]
       default   or d    <candidate> [version]
       current   or c    [candidate]
       upgrade   or ug   [candidate]
       version   or v
       broadcast or b
       help      or h
       offline           [enable|disable]
       selfupdate        [force]
       update
       flush             <broadcast|archives|temp>

   candidate  :  the SDK to install: groovy, scala, grails, gradle, kotlin, etc.
                 use list command for comprehensive list of candidates
                 eg: $ sdk list

   version    :  where optional, defaults to latest stable if not provided
                 eg: $ sdk install groovy
```

Some aliases are available through this plugin:

```
alias sdki='sdk install'
alias sdkun='sdk uninstall'
alias list='sdk list'
alias sdku='sdk use'
alias sdkd='sdk default'
alias sdkc='sdk current'
alias sdkup='sdk upgrade'
alias sdkv='sdk version'
alias sdkb='sdk broadcast'
alias sdko='sdk offline'
alias sdksu='sdk selfupdate'
alias sdkf='sdk flush'
```

## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fmatthieusb%2Fzsh-sdkman.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fmatthieusb%2Fzsh-sdkman?ref=badge_large)

