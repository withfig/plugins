# kubectx-zshplugin

[kubectx](https://github.com/ahmetb/kubectx) is a great tool for Kubernetes that provides a `kubectx` and `kubens` command that make it easier for you to work with multiple clusters and namespaces.

kubectx-zshplugin automatically installs them into your ZSH environment for you.

## Installation

`kubectx-zshplugin` can be automatically loaded as a ZSH plugin by any framework that supports [oh-my-zsh](github.com/robbyrussell/oh-my-zsh) compatible plugins.

### zgen

If you're using [zgen](https://github.com/tarjoilija/zgen):

1. Add `zgen load unixorn/kubectx-zshplugin` to your `.zshrc` along with your other `zgen load` commands.
2. `zgen reset && zgen save`. `zgen` will automatically clone the `git` repository the next time you start a terminal session.

### Antigen

If you're using [Antigen](https://github.com/zsh-users/antigen):

1. Add `antigen bundle unixorn/kubectx-zshplugin` to your `.zshrc` where you've listed your other plugins.
2. Close and reopen your terminal window to start a new session and Antigen will automatically clone and load the plugin for you. Alternatively, you can run `antigen bundle unixorn/kubectx-zshplugin` in a running shell to have `antigen` automatically clone and load the new plugin immediately.

### Oh-My-ZSH

If you're using [oh-my-zsh](github.com/robbyrussell/oh-my-zsh):

1. In the terminal, change to _oh-my-zsh_'s custom plugin directory:

    `cd ~/.oh-my-zsh/custom/plugins/`

2. Clone the repository into a new `kubectx` directory:

    `git clone --recursive https://github.com/unixorn/kubectx-zshplugin.git kubectx`
    `cd ~/.oh-my-zsh/custom/plugins/kubectx/`
    `git submodule init`
    `git submodule update`

3. Edit your `~/.zshrc` and add `kubectx` – same as clone directory – to the list of plugins to enable:

    `plugins=( ... kubectx )`

4. Then, restart your terminal application to **refresh context** and use the plugin. Alternatively, you can source your current shell configuration:

    `source ~/.zshrc`

