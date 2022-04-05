# AX-ZSH: Alex' Modular ZSH Configuration

[AX-ZSH] is a modular configuration system for the Z shell ([ZSH]).
It provides sane defaults and is extendable by plugins.

AX-ZSH integrates well with [Powerlevel10k] and other extensions, even plugins
of [OhMyZsh], see [below](#integration-with-other-projects).

## Installation

To install AX-ZSH, either download a source archive or use [Git] to clone it.
Afterwards use the `install.sh` script inside of the source directory to set
up the `~/.axzsh` directory.

The homepage of [AX-ZSH] can be found at [GitHub]:
<https://github.com/alexbarton/ax-zsh>.

Prerequisites:

* [ZSH] – obviously ;-)
* [Git] (optional but recommended!)

Installing AX-ZSH is a two-step process:

1. Clone or copy the source files into `~/.axzsh`,
2. Run the `~/.axzsh/install.sh` script.

The `install.sh` script creates symbolic links for `~/.zprofile`, `~/.zshrc`,
`~/.zlogin`, and `~/.zlogout` (don't worry, already existing files are backed
up).

Then close all running ZSH sessions and restart them to activate AX-ZSH. And
maybe change your default shell to ZSH if you haven't already?

For example like this:

```sh
# Set new default shell
chsh -s $(command -v zsh)

# Replace running shell with a ZSH login shell
exec $(command -v zsh) -l
```

### Installation using Git

When using [Git], the preferred method, it is best to directly clone the AX-ZSH
repository into the `~/.axzsh` directory and call `install.sh` from this
location:

```sh
git clone https://github.com/alexbarton/ax-zsh.git ~/.axzsh
~/.axzsh/install.sh
```

### Installation without Git

*Note:* If you do not install AX-ZSH with [Git], you will not be able to upgrade
itself afterwards with the integrated `axzsh upgrade` command! Therefore this
method is _not recommended_ for normal use!

```sh
curl -Lo ax-zsh-master.zip https://github.com/alexbarton/ax-zsh/archive/refs/heads/master.zip
unzip ax-zsh-master.zip
mv ax-zsh-master ~/.axzsh
~/.axzsh/install.sh
```

## Upgrade

When you used Git to install AX-ZSH (and/or plugins), you can use the `axzshctl`
command to upgrade AX-ZSH itself and external plugins like this:

```sh
axzshctl upgrade
```

## Usage

AX-ZSH comes with a hopefully sane default configuration and can be extended
using plugins. Different types of plugins are supported:

* Plugins shipped with AX-ZSH.
* Themes shipped with AX-ZSH.
* 3rd-party plugins:
  * installed manually into `$AXZSH/custom_plugins`
  * stand-alone plugins stored on GitHub
  * plugins of OhMyZsh from its GitHub repository
* 3rd-party themes:
  * installed manually into `$AXZSH/custom_themes`
  * some stand-alone themes stored on GitHub

### Check whether all locally available "useful" plug-ins are activated

Most plugins can be enabled even when the commands they work with aren't
available and won't do any harm. But to keep ZSH startup times low, you should
only enable plugins that are useable on your local system and which you actually
plan to use.

You can use the following command to let AX-ZSH scan the status of all locally
available plugins:

```sh
axzshctl check-plugins
```

It will summarize the status of all enabled plugins, and suggest to enable
plugins which seem to make sense on the system and to disable enabled plugins
that seem not to be supported (for example because of missing dependencies).

### List enabled plugins

Run the following command to list all currently enabled plugins:

```sh
axzshctl list-enabled
```

### Enable plugins

AX-ZSH comes with a sane "core ZSH configuration", but it can show its true
strengths when enabling additional plugins for additional tools and commands
that are available on your system and you want to use.

Different types of plugins are supported (see the introduction to the section
"_usage_" above) which are differentiated by their identifier:

* `<name>`: locally available plugin, either bundled with AX-ZSH itself, or
  installed manually (see below).
* `<repository>/<name>`: stand-alone [GitHub] repository.
* `@ohmyzsh/<name>`: [OhMyZsh] plugin from the OhMyZsh GitHub
  repository (see <https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins>).

You can enable one or more plugins like this:

```sh
axzshctl enable-plugin <identifier> [<identifier> […]]
```

*Hint:* _Tab-completion_ works for sub-commands and already locally available
plugin names!

Some examples:

```sh
# Enable some plugins bundled with AX-ZSH:
axzshctl enable-plugin editor_select git ssh_autoadd

# Enable the Powerlevel10k "theme plugin" from GitHub, see
# <https://github.com/romkatv/powerlevel10k>:
axzshctl enable-plugin romkatv/powerlevel10k

# Enable the "fast-syntax-highlighting" plugin from GitHub, see
# <https://github.com/zdharma-continuum/fast-syntax-highlighting>:
axzshctl enable-plugin zdharma-continuum/fast-syntax-highlighting

# Enable the Git and tmux plugins of OhMyZsh:
axzshctl enable-plugin @ohmyzsh/git @ohmyzsh/tmux
```

#### Custom local plugins

You can link custom plugins stored in arbitrary directories using `axzshctl`
by specifying the complete path name. Or you can place additional plugins into
the `$AXZSH/custom_plugins` folder which is searched by the `axzshctl` tool
by default.

In addition you can set the `AXZSH_PLUGIN_D` variable (and `ZSH_CUSTOM` like
[OhMyZsh]) to specify additional plugin search directories.

### Disable plugins

Run the following command to disable a currently enabled plugin:

```sh
axzshctl disable-plugin <identifier> [<identifier> […]]
```

*Hint:* _Tab-completion_ works for sub-commands and plugin names!

### Update plugin cache

AX-ZSH uses a "plugin cache" to speedup ZSH start times. This cache is
automatically updated when using the `axzshctl` sub-commands, for example when
enabling or disabling plugins, or when  upgrading the AX-ZSH installation and
all plugins.

But you *have to* update the cache when manually installing plugins or during
development of a own local plugin after updating its code!

Run the following command to update the AX-ZSH cache:

```sh
axzshctl update-caches
```

### Other `axzshctl` sub-commands

Please run `axzshctl --help` to get a full list of a available sub-commands:

```sh
axzshctl --help
```

## Integration with other projects

### Powerlevel10k

AX-ZSH supports [Powerlevel10k] out of the box, you just have to install it as a
plugin:

```sh
axzshctl enable-plugin romkatv/powerlevel10k
```

*Hint:* Once the Powerlevel10k plugin theme is installed, you can use the
regular `axzshctl set-theme` command to enable it, like for any other installed
theme: `axzshctl set-theme powerlevel10k`.

## AX-ZSH & local ZSH configuration

Don't modify `~/.zprofile`, `~/.zshrc`, `~/.zlogin`, or `~/.zlogout`! These
are links to "AX-ZSH"-private files that can become overwritten when updating.

You can use the following files for local ZSH configuration:

1. AX-ZSH doesn't use `~/.zshenv` in any way. So you can use this file for your
   own purposes (for example, to set up some environment variables that AX-ZSH
   relies on).

2. AX-ZSH reads the optional files `~/.zprofile.local`, `~/.zshrc.local`,
   `~/.zlogin.local`, and `~/.zlogout.local` after its own core initialization
   files when present.

## Environment variables

Expected to be already set:

* `HOME`
* `LOGNAME`

Validated and/or set up by core plugins:

* `AXZSH` – AX-ZSH installation directory
* `HOST`
* `HOSTNAME` (same as HOST, deprecated)
* `LOCAL_HOME`
* `PS1`
* `SHORT_HOST`
* `TERM`
* `TMPDIR` (set and always ends with a "/")
* `XDG_CACHE_HOME`
* `XDG_RUNTIME_DIR`
* `ZSH_CACHE_DIR`

___
[AX-ZSH]: <https://github.com/alexbarton/ax-zsh> "AX-ZSH Homepage"
[Git]: <https://git-scm.com/> "Git Homepage"
[GitHub]: <https://github.com/> "GitHub Homepage"
[OhMyZsh]: <https://ohmyz.sh/> "OhMyZsh Homepage"
[Powerlevel10k]: <https://github.com/romkatv/powerlevel10k> "Powerlevel10k Homepage"
[ZSH]: <https://www.zsh.org/> "ZSH Homepage"

[AX-ZSH] Copyright (c) 2015-2021 Alexander Barton <alex@barton.de>

