# bitbucket-git-helpers

[![Code Climate](https://codeclimate.com/github/unixorn/bitbucket-git-helpers.plugin.zsh/badges/gpa.svg)](https://codeclimate.com/github/unixorn/bitbucket-git-helpers.plugin.zsh)
[![Issue Count](https://codeclimate.com/github/unixorn/bitbucket-git-helpers.plugin.zsh/badges/issue_count.svg)](https://codeclimate.com/github/unixorn/bitbucket-git-helpers.plugin.zsh)

Some git helper scripts for dealing with repos on bitbucket that were inspired by Peter Hurford's [git-it-on.zsh](https://github.com/peterhurford/git-it-on.zsh) plugin.

*Note:* This has only been tested on OS X.  Support for Linux is present but has not been tested.

The irony that I'm hosting this on Github hasn't escaped me.

## Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Included Scripts](#included-scripts)
  - [git-bb-create-pull-request](#git-bb-create-pull-request)
  - [git-bb-list-pull-requests](#git-bb-list-pull-requests)
  - [git-bb-open](#git-bb-open)
- [Installing](#installing)
  - [Antigen](#antigen)
  - [oh-my-zsh](#oh-my-zsh)
  - [zgen](#zgen)
  - [Manual Installation](#manual-installation)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Included Scripts

### git-bb-create-pull-request

Usage:

`git-bb-create-pull-request` - opens the bitbucket page to create a new PR for the branch you're on.

### git-bb-list-pull-requests

Usage:

`git-bb-list-pull-requests` - opens the bitbucket pull-request page for the repository.

### git-bb-open

Usage:

`git-bb-open` - Opens the current directory (or a path if specified) on bitbucket in the current branch.

`git-bb-open path` - Opens the specified path on bitbucket in the current branch.

## Installing

### Antigen

If you're using [Antigen](https://github.com/zsh-users/antigen):

1. Add `antigen bundle unixorn/bitbucket-git-helpers.plugin.zsh` to your `.zshrc` where you've listed your other plugins.
2. Close and reopen your Terminal/iTerm window to **refresh context** and use the plugin. Alternatively, you can run `antigen bundle unixorn/bitbucket-git-helpers.plugin.zsh` in a running shell to have antigen load the new plugin.

### oh-my-zsh

If you're using [oh-my-zsh](github.com/robbyrussell/oh-my-zsh):

1. In the command line, change to _oh-my-zsh_'s custom plugin directory :

    `cd ~/.oh-my-zsh/custom/plugins/`

2. Clone the repository into a new `bitbucket-git-helpers` directory:

    `git clone https://github.com/unixorn/bitbucket-git-helpers.plugin.zsh.git bitbucket-git-helpers`

3. Edit your `~/.zshrc` and add `bitbucket-git-helpers` – same as clone directory – to the list of plugins to enable:

    `plugins=( ... bitbucket-git-helpers.plugin.zsh )`

4. Then, restart your terminal application to **refresh context** and use the plugin. Alternatively, you can source your current shell configuration:

    `source ~/.zshrc`

### zgen

If you're using [zgen](https://github.com/tarjoilija/zgen):

1. Add `zgen load unixorn/bitbucket-git-helpers.plugin.zsh` to your `.zshrc` along with your other `zgen load` commands.
2. `rm ${ZGEN_INIT}/init.zsh && zgen save`

### Manual Installation

Nothing here actually requires you to use ZSH or zgen, that's just a convenient distribution method for anyone using a ZSH framework.

If you aren't using any zsh frameworks, or if you're a bash user, do the following steps:

1. git clone this repository
2. Add `cloneDirectory/bin` to your `$PATH`.

