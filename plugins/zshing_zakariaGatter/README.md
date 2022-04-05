# zshing

## Table of Contents

- [About](#about)
- [Quick Start](#quick-start)
- [Using Zshing](#using-zshing)
- [TODO](#todo)

## About

[Zshing] Zsh plugin manager similar to VundleVim

[Zshing] allows you to...

* keep track of and configure your plugins right in the `.zshrc`
* Install Zsh plugins from Github or Locally
* Install zsh Plugins from Gitlab and BitBucket and other sites
* Load plugins from oh-my-zsh
* Disable zsh Plugin by add "#" at first
    * `this plugin wont be removed but wont be load when start zsh, its useful for themes`
* Update Zsh plugins
* Clean unused plugins up
* run the above actions in a *single command*

[Zshing] automatically...

* manages the __Source Plugins__ of your installed Plugins

[Zshing] is undergoing an interface change, please stay up to date to get latest changes.

![zshing-installer](./pics/test.png)

## Quick Start

1. Introduction:

   Installation requires :
    * [Git]() triggers `git clone` for each configured repository to `~/zshing` by default.
    * [Zsh]() Shell I create this plugin manager for

2. Set up [Zshing]:

   ```
   mkdir -p ~/.zshing
   git clone https://gitlab.com/zakariaGatter/zshing.git ~/.zshing/zshing
   ```

3. [Zshing] Manual:
    * Main Plugin Syntax

    ```
    #:Username/repo:branch:site:type:name
    | |             |      |    |    |
    | |             |      |    |    `- NAME: name option to add the same plugin or theme many time with different names
    | |             |      |    |             leave it empty to take repo name as repo
    | |             |      |    |
    | |             |      |    `- TYPE: What the type of this Plugin, default value: (plugin|theme|completion)
    | |             |      |
    | |             |      `- SITE: Where to Download this repo from, like : (gitlab|github|local)
    | |             |               Or you can set link like : (*git://**|https://*|http://*|ssh://*|git@*)
    | |             |         you can set full url of website, the URL Need to support git clone
    | |             |         Local is for local plugins
    | |             |         leave it empty to take github as default
    | |             |
    | |             `- BRANCH: use any branch you like, leave it empty to take Master as default
    | |
    | `- REPO: repo name can be as above or as a plugin dir, ex: ($HOME/path/to/plugin)
    |          Don't give repo name if you use Link in SITE
    |
    `- STAT: add # to disable this plugin, the plugin keep updating and will not remove but wont load with zsh

    Examples:
        ZSHING_PLUGINS=(
            # disable plugin, this plugin will update but won't load with zsh
            "#:zakariagatter/zshing:master:github:plugin:zshing"

            # Gitlab Plugin
            ":zakariagatter/markgate:master:github:plugin:"
            "::master:https://github.com/zakariagatter/markedit:plugin:"

            # Local plugin
            ":/path/to/plugin::local:plugin:"
        )

    ```

    * Oh-my-zsh Syntax :

    ```
    #:::oh-my-zsh:(plugin|theme|lib):name
    | | |         |                  |
    | | |         |                  `- You can set plugin,theme or lib name
    | | |         |                     Ex : :::oh-my-zsh:plugin:arch
    | | |         |                     Note: if you want to use any theme i recomand you to active git lib (ex: ::master:oh-my-zsh:lib:git)
    | | |         |
    | | |         `- Set the Plugin Type
    | | |            if set Theme,lib just give the name no Extantions
    | | |
    | | `-  Leave it as it is
    | |
    | `- Just leave it Empty
    |
    `- Add # To Disable only this plugin

    Examples:
        ZSHING_PLUGINS=(
            # load arch plugin from oh-my-zsh
            ":::oh-my-zsh:plugin:arch"
        )

    ```

4. Configure Plugins:

   Put this at the top of your `.zshrc` to use Zshing. Remove plugins you don't need, they are for illustration purposes.

   ```zsh
    # Zshing Main Dir
    ZSHING_DIR="$HOME/.zshing"

    # Set Plugin configuration Before ZSHING_PLUGINS
    ZSHING_PLUGINS=(
        # disable plugin, jeep this plugin disable to avoid stupid loop
        "#:zakariagatter/zshing:master:gitlab:plugin:zshing"

        # load local plugin
        ":$HOME/plugin::local:plugin:"

        #full site
        ":::https://github.com/zakariagatter/markedit:plugin:"

        # load git lib from oh-my-zsh to use git_prompt_info
        ":::oh-my-zsh:lib:git"

        # load color-man plugin from oh-my-zsh
        ":::oh-my-zsh:plugin:colored-man-pages"
    )

    # set here all plugins Settings and arguments before you source Zshing

    # source zshing plugin
    source "$ZSHING_DIR/zshing/zshing.zsh"
   ```

5. Note :

    * Add all plugins settings and Argument before You source Zshing

## Using Zshing

```
    ZSHING Zsh Plugin to manage Plugin similar to VundleVim

    CMDS :
        zshing_install  [Install Plugin direct from Local or Online git Repos]
        zshing_update   [Update existing Plugins in your system]
        zshing_clean    [Clean and Remove unwanted Plugins]
        zshing_help     [Show this help Dialog]
```

## TODO
[Zshing] is a work in progress, so any ideas and patches are appreciated.

* [X] Install Plugins from Github
* [X] Install Plugins Locally
* [X] Load plugin from oh-my-zsh
* [X] Update Plugins
* [X] Clean Unwanted Plugins
* [X] Disable Plugin and themes
* [X] Install Plugins From Gitlab
* [X] Install Plugins from any site support git


[Zshing]:http://gitlab.com/zakariagatter/zshing

