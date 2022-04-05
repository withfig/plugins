Zsh Diractions
==============

*Doing Anything, Anywhere, from here*

[![Tag Version](https://img.shields.io/github/tag/AdrieanKhisbe/diractions.svg)](https://github.com/AdrieanKhisbe/diractions/tags)
[![Build Status](https://img.shields.io/travis/com/AdrieanKhisbe/diractions?label=travis%20build&logo=travis)](https://travis-ci.com/AdrieanKhisbe/diractions)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/AdrieanKhisbe/diractions/Diractions%20CI/package-refresh?label=action%20build&logo=github)](https://github.com/AdrieanKhisbe/diractions/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Join the chat https://gitter.im/AdrieanKhisbe/diractions](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/AdrieanKhisbe/diractions)


[![asciicast](https://asciinema.org/a/140889.png)](https://asciinema.org/a/140889)

## Aim
The goal of this plugin is *directory indexing*, map a short logical/mnemotechnical name to directory to quickly access them, or perform action in them.
Thanks to **diraction** user can perform quick actions on its registered directory, `cd` into it, `ls` it, `git` it, running some command, or refering to them in any command with short variable to denote them.

### Hello Diraction
Suppose that I have a hypothetical `favdir` and `mydir` directories that i use a alot.
Here are a simple scenario: you go in `favdir`, see what file there is then copy one in `mydir` using the variable.
Then I check it has been copied to the directory with `mydir ls`, then go in one of mydir subdirectory.

```sh
[~]           >> favdir                  # jumping in diraction folder
[~_favdir]    >> ls
                 some-file
[~_favdir]    >> cp some-file $_mydir    # using mydir as a variable
[~_favdir]    >> mydir ls                # calling ls in mydir
                 other-file some-file
[~_favdir]    >> mydir /sub              # jumping in a sub directory of mydir
[~_mydir/sub] >> favdir - git status     # run any command or alias
                 ? someuntrackfile
```

<!-- §todo: Add some other example, gif of example
§see: ho to do them -->

*This is just a glimpse of what you can do, if you wanna see more [scroll down a bit](#Usage)*. Otherwise, go in the terminal and practice. completion is there to help you *:)*

<!-- §see: inner link document -->
<!-- markdown-toc start - Don't edit this section. Run M-x markdown-toc-refresh-toc -->
**Table of Contents**

- [Zsh Diractions](#zsh-diractions)
    - [Aim](#aim)
        - [Hello Diraction](#hello-diraction)
    - [Usage](#usage)
        - [Define your own diractions](#define-your-own-diractions)
        - [Use your _diraction_](#use-your-diraction)
            - [(Sub)Commands](#subcommands)
            - [Completion](#completion)
        - [Others Diraction Global Commands](#others-diraction-global-commands)
    - [Installation](#installation)
    - [Configuration](#configuration)
        - [Your Diractions](#your-diractions)
            - [The Diraction Config file](#the-diraction-config-file)
            - [The custom hook](#the-custom-hook)
        - [Customs](#customs)
    - [History](#history)
        - [Changelog](#changelog)
    - [Notes](#notes)
        - [Security Note](#security-note)

<!-- markdown-toc end -->


## Usage

Here is some more in depth description about how to use *Diractions*.
*Diraction* is both a function suite, and the function aliases and vars it will create for you.

### Define your own diractions
First step is to define your *diractions*, associate name to your most used directory.

+ you simply create a new diraction with `diraction create <name> <directory>`
  - by default it will check if directory exist
  - to bypass this check use the `--ignore-missing-dir`
  - to create the missing directories, use `--create-missing-dir`
+ save the current directory with `diraction save <name>`
+ you can also create many *diractions* with the `batch-create` command. it reads STDIN (so pipe a file to it, or use here docs) which can be usefull in configs.

   ```sh
   diraction batch-create <<DIRS
   dir1 /long/dir/one
   dir2 /long/dir/2
   DIRS
   ```
+ You can see the existing *diraction* using the following subcommands:
  `list`(`ls`), `list-alias`(`la`), `list-dir`(`ld`) and even `grep` throught them

### Use your _diraction_

Now that you have a *diraction* it's time to use it. *:)*
Simpliest way is to just type it's name to go in the attached directory.
A better way is to type a subcommand along with it

#### (Sub)Commands
Here are the main commands. Commands that are executed in the context of the diraction:
- `l`|`ls [args...]` : just some _ls_
- `t`|`tree [args...]` : just some _tree_
- `c`|`cd <subdir>` : jump in the subdirectory specified
- `/ <subdir>` | `/<subdir>` : also jump in subdir
- `o`|`open [filename]` : open folder (or file/subfolder being relative to the diraction folder)
- `ed`|`edit <filename>` : edit the file (being relative to the diraction folder)
- `e`|`exec <your quoted command>` : exec the command (use single quote for the variable to be evaluated)
  - `-`|`,`|`_` : use the following as a command
  - `--`|`,,`|`quoted-exec` : use the following as a command, preserving quotes. (only supported for zsh>=5.3)
- `i`|`interactive`|`prompt`|`shell` : to run several command in the context of the diraction directory
- `w`|`where`|`?` : to be remind what is the diraction folder
- all other commands contained in the `DIRACTION_DISPATCH_WHITELIST`.
  by default `make` `rake` `sbt` `gradle` `git` `cask` `bundler` `ncdu` `du` `nemo` `nautilus` `open` `xdg-open` `ls`

You can also use the diraction variable in any command. `$_mydir` will be expanded to the attached directory.

A word about how *diraction* works: the *diraction* aliases you create point to a *"dispatch function"*  taking the attached directory as first argument.
(For instance *diraction* `mydir` pointing to `/tmp/mydir`is an alias for `_diraction-dispatch "/tmp/mydir"` )

#### Completion

*diraction* aliases support completion.

Completion cover:
- the available subcommands described in previous section
  - _ex_: `mydir l <TAB>` would complet to `ls` and all whitelisted command starting with a l.
- the subfolder when subcommand start with a leading `/`
  - _ex_: `mydir /ho <TAB>` would complete to dir such as `/home` `/hope` `ahola`
  - _ex_: `mydir /home/ <TAB>` would complete to all dir in `$_mydir/home`
  - note that fuzzy matching is performed on the last segment of the path
- the nested subfolder when subcommand start with a `//`
  - _ex_: `mydir //ho <TAB>` would complete subdir of `/home` `/hope` `ahola` up to 2 deep level (`$_mydir/home`, `$_mydir/home/personal` `$_mydir/home/personal/secretproject'`)
  - _ex_: `mydir //home/ <TAB>` would complete to all subdir in `$_mydir/home` up to
- the argument of the subcommand that was specified:
  - _ex_: `mydir make <TAB>` would complete to `make` target
  - _ex_: `mydir ls -<TAB>` would complete to `ls` options

### Others Diraction Global Commands

- `diraction disable <dirname>` : disable attached alias
- `diraction enable <dirname>` : reenable it
- `diraction destroy <dirname>` : destroy the alias.
- `diraction destroy-all` : destroy all the existing diractions, need a `-f`, `--force` argument
- `diraction reset` : destroy the diraction and reload them from the configuration

and of course, the `help` command.

Besides *every* `diraction` commands accept a `-h`, `--help` flag that will get you print help
for the specified command.

## Installation

If you use package manager, (*which I recommend :)*),
just add the plugin with `adrieankhisbe/diractions` identifier:

- for [antibody](https://github.com/getantibody/antibody), add `antibody bundle "adrieankhisbe/diractions"`
- for [antigen](https://github.com/zsh-users/antigen), add `antigen bundle adrieankhisbe/diractions`
- for [zplug](https://github.com/zplug/zplug), add `zplug "adrieankhisbe/diractions"`

If you want to use the source directly you need to source [`diractions.plugin.zsh`](./diractions.plugin.zsh),
to support completion you need to add the directory to `fpath` so that `__diraction-dispatch` `_diraction` are in it.

## Configuration

### Your Diractions
*Diractions* are not meant to be defined by hand each time, of course there is ways to persist your diractions.

This can be done in two way:

#### The Diraction Config file

You can store your *diraction* definition in the `DIRACTION_DEF_FILE` which is `~/.diractions` by default.
It just consist in a file having on each line two fields, the name of the diractions, then it's dir
You can put comments if you want, shell style `#`, and use environment variables `$HOME` or diractions variables `$_somepreviouslydefineddir`

Here is some sample
```sh
  # here are some diraction definition
  ssp  /some/stupid/path
  yasp "$_ssp/yet/another/stupid/path"
```

<!-- ##### Checkying the config -->
You can check your definition file is correct by using the `diraction check config` command

#### The custom hook

Another to customize diractions is to define a function named `diraction-personal-config`.

This functions is executed by the `diraction-load-config` if it exists.
Definitions in the function will take precedence

Here is some Example:

```zsh
    diraction-personal-config (){
    # put your config here
    diraction-batch-create <<DIRS
        dir1  /my/path/number1
        yasp  /yet/another/stupid/path
    DIRS
   }
```

### Customs
There is also some variables to customize the behavior of diraction to fit your needs.

Here are the main ones:
- `DIRACTION_AUTO_CONFIG` : is the config automaticaly loaded after loading of plugin, true by default
- `DIRACTION_DEF_FILE` : the name of the file containing your diraction definition
- `DIRACTION_EDITOR` : which editor command is used for the edit command
- `DIRACTION_INTERACTIVE_PROMPT` : the "prompt" for the "interactive" command
- `DIRACTION_EXPORT_VARIABLES` :
  - whether the `_dir` variables should be exported to the child processes.
  - Off by default, can be activated setting variable to `true`
  - note: this was the original _(only)_ behavior for versions prior to `v0.18.0`
- `DIRACTION_READONLY_VARIABLES` : whether the `_dir` variables should be made read only. Deactivated by default, activate with `true`

## History

This plugins started out as some growing *tweak* in my zsh personal config.
First it was named *alvar*. (as a compaction of alias and variable) It just created an alias to jump in some dir, and a variable to refer to the directory. Later it was extended to perform some action in these directories.
Then it was then extracted into is own repo, hence the troubled initial history.
With a new repo, he got a new name **Diractions** (*never explain an overobvious pun*),
and is growing ever since with new functionalities. :)

<!-- Maybe list of feature introduced after 1 will go there? -->

<!-- §TODO contribution note -->

<!-- Maybe: add version? -->

<!-- §maybe analytics? -->

### Changelog

Changelog might be consulted in the dedicated [file](CHANGELOG.md)

## License
Licensed under [MIT](./LICENSE).

## Notes

**If you have any remark, refactor suggestion or you are having some unexpected behavior or bug (*soooory*), just post an issue ;)**

### Security Note
(I'm aware of the potential security issues: zsh env/function poisoinning, and evaluated code/injections,... but it's aimed to be used only in interactive mode on your shell so as insecure as a shell bash config.
So for now, I would advise not to use it without a glance of the source)

