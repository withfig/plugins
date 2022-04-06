# Zit

## minimal plugin manager for ZSH

**This software is completed, not abandoned. More details in [FAQ](#FAQ).**

[![Test](https://github.com/thiagokokada/zit/workflows/Test/badge.svg)](https://github.com/thiagokokada/zit/actions)

Zit is yet another plugin manager for ZSH. It is minimal because it implements
the bare minimum to be qualified as a plugin manager: it allows the user to
install plugins from Git repositories (and Git repositories only, them why
the name), source plugins and upgrade them. It does not implement fancy
functions like cleanup of removed plugins, automatic compilation of installed
plugins, alias for oh-my-zsh/prezto/other ZSH frameworks, building binaries,
PATH manipulation and others.

It should be as simple as it can be, minimal enough that if you want you can
simply copy and paste the whole Zit source to your `~/.zshrc` and it would
work.

## Usage

The first command of Zit is `install`:

    $ zit-install "https://github.com/Eriner/zim/" ".zim"

The command above will clone [Eriner/zim](https://github.com/Eriner/zim) inside
`ZIT_MODULES_PATH/.zim` during the next start of your ZSH (or if you do a
`source ~/.zshrc`). However, if `ZIT_MODULES_PATH/.zim` already exists, it will
do nothing.

By the way, the default value of `ZIT_MODULES_PATH` is defined as the value of
your `ZDOTDIR` variable or your home directory.

You can remove an installed module using `remove`:

    $ zit-remove ".zim"

This will prompt if you really want to remove the directory `ZIT_MODULES_PATH/.zim`.
If you answer (y)es, the removal will continue.

After install, you can load ZIM by running:

    $ zit-load ".zim" "init.zsh"

`zit-load` also supports loading local plugins. Say I have a local plugins in
`~/.local-plugin` directory named `local.zsh`:

    $ zit-load ".local-plugin" "local.zsh"

Zit also supports Git branches. To do so, pass the branch using `#branch` after
the repository url during `zit-install` call:

    $ zit-install "https://github.com/zsh-users/zsh-autosuggestions#develop" ".zsh-autosuggestions"

**Important note:** Zit does not support changing branches after install. If
you want to change a branch of an already installed branch, go to the directory
of the installed plugin and call `git checkout branch-name` manually! An alternative
is to use `zit-remove` to remove the module without removing it from your configuration,
so the module will be reinstalled in the next ZSH startup.

You can also call both `zit-install` and `zit-load` in one step:

    $ zit-install-load "https://github.com/Eriner/zim/" ".zim" "init.zsh"

Finally, Zit can also upgrade all your installed plugins. For this one you
simply need to run:

    $ zit-upgrade

And Zit will upgrade all your plugins.

Of course, instead of typing this command at the start of your session
everytime, you can simply put in your `~/.zshrc`.

## Aliases

Zit also provide some command alias so you can type slightly less:

| Command            | Alias    |
| ------------------ | -------- |
| `zit-install`      | `zit-in` |
| `zit-load`         | `zit-lo` |
| `zit-install-load` | `zit-il` |
| `zit-upgrade`      | `zit-up` |
| `zit-remove`       | `zit-rm` |

## Installation

There are different ways to install Zit. The simplest one is to copy the file
`zit.zsh` somewhere in your home directory and source it in your `~/.zshrc`.
This will always work because I want the source code of Zit to be
self-contained inside this one file.

If you want to be fancy, you can also clone this repository:

    $ git clone https://github.com/thiagokokada/zit.git "${HOME}/.zit"

And source the cloned diretory in your `~/.zshrc`

    source $HOME/.zit/zit.zsh

In the above case you could even put in your `~/.zshrc` (after above line):

    zit-install "https://github.com/thiagokokada/zit" ".zit"

So Zit can manage Zit upgrades too.

## Supported versions

Zit supports ZSH version `5.2.0` and above. Older versions may work however
they're unsupported.

For Git, version `1.9.0` and above are supported.

## Examples

You can see examples of Zit utilization in [zshrc.example](zshrc.example)

## FAQ

### Why Zit doesn't have updates? Looks like an abandoned software...

Zit is feature complete. It were developed with two objectives in mind:

1. Being as minimal as possible, but not minimal enough that would be useless
2. Being as correct as possible, doing what I want without trying to be smart

Both objectives have been archived so I can proudly say that Zit is a finished
software. I still use Zit daily, and it covers all my use cases and,
surprisingly, it is flexible enought that I still find new ways to use it.

And more important, the last bug I found in it was months ago (and it was a
simple typo!).

The lack of updates doesn't mean that Zit is abandoned, though. Like I said
above, I still use Zit daily, so if I (or someone) found some bug I will fix
it.

### Why Zit install everything in home directory by default?

Because some plugins assume that they're running from home. If this isn't a
problem for you, you can simply set your `ZIT_MODULES_PATH` to something in
your `~/.zshrc`:

    export ZIT_MODULES_PATH="$HOME/.zit.d"

If you set `ZIT_MODULES_PATH`, and there is one plugin that has hard-coded
paths, you can do the following:

    ZIT_MODULES_PATH="$HOME" zit-in "https://github.com/author/random" ".random"
    ZIT_MODULES_PATH="$HOME" zit-lo ".random" "random.zsh"

### How can I compile my ZSH plugins to speed up initialization?

The script `extras/compile-zsh-files.zsh` shows an example on how to compile
ZSH files and plugins. You can copy it somewhere and adapt it to your needs,
or you can call it directly by adding the following lines **at the end of your
`~/.zshrc`**:

    zit-in "https://github.com/thiagokokada/zit" ".zit" # Skip if Zit is already installed
    zit-lo ".zit" "extras/compile-zsh-files.zsh"

### How can I run a bash/ksh/sh plugin?

You can simply try `zit-in/zit-lo` or `zit-il` and see if it will work. If
not, you can try to run `zit lo` in compatibility mode:

    # You can't use zit-il in this case, since we want to run only zit-lo in emulation mode.
    zit-in "https://github.com/author/random-bash-plugin" "random-bash-plugin"
    # You may need to avoid aliases in emulation mode
    emulate bash -c 'zit-load "random-bash-plugin" "plugin.bash"'

Just remember that this may not work either since ZSH emulation is not
perfect.

### How can I use Zit to manage scripts like fasd?

If you want to use Zit to manage scripts that should be added to the `PATH`
instead of using `source` to load, you can do the following:

    zit-in "https://github.com/clvv/fasd" "fasd"
    export PATH="${ZIT_MODULES_PATH}/fasd:${PATH}"

### How can I disable upgrades for a specific module in Zit?

You can set `ZIT_DISABLE_UPGRADE` in `zit-install` and `zit-install-load` to
disable upgrades for a specific module. For example:

    ZIT_DISABLE_UPGRADE=1 zit-install "https://github.com/Eriner/zim/" ".zim"
    ZIT_DISABLE_UPGRADE=1 zit-install-load "https://github.com/Eriner/zim/" ".zim" "init.zsh"

You can also disable `ZIT_DISABLE_UPGRADE` globally by calling `export
ZIT_DISABLE_UPGRADE=1` in your `.zshrc`. This may be useful if you want to only
upgrade some specific modules, by unsetting `ZIT_DISABLE_UPGRADE`. For example:

    export ZIT_DISABLE_UPGRADE=1
    ZIT_DISABLE_UPGRADE= zit-install "https://github.com/Eriner/zim/" ".zim"
    ZIT_DISABLE_UPGRADE= zit-install-load "https://github.com/Eriner/zim/" ".zim" "init.zsh"

### How can I force a specific version of module in Zit?

Following the tip above to disable upgrades, you can be sure that one specific
module will never change its version.

So lets say you want to use `Eriner/zim` with commit `abcde`, you can do
something like this:

    # In your .zshrc
    ZIT_DISABLE_UPGRADE=1 zit-install "https://github.com/Eriner/zim/" ".zim"

    # In ZSH itself
    $ cd ~/.zim
    $ git checkout abcde

### How can I remove a module? It keeps being reinstalled after calling `zit-rm`!

Using `zit-remove` will delete the directory, however if you do not remove it from
your `.zshrc` it will be installed again in the next ZSH startup. So do not forget
to remove the call to `zit-install` or `zit-install-load` of your module.

