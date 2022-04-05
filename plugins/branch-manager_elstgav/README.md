# branch-manager [![GitHub tag](https://img.shields.io/github/v/tag/elstgav/branch-manager?label=version&sort=semver)](#changelog)
oh-my-zsh plugin for managing branches

Updating branches can be a pain, especially if you have unsaved changes in your workspace. `branch-manager` makes it easier to perform updates by auto-stashing your changes before doing routine maintenance, and then returning you to your workspace.

## Usage

`branch-manager` adds the following commands to your shell:

 - `update_branch [branch=current_branch]`  
   Pull `branch` and return to your workspace  
   *You can also use this to update other branches while staying in your own*
    
 - `merge_branch [branch=master]`  
   Merge `branch` into your own
   
 - `rebase_branch [branch=master]`  
   Rebase `branch` into your own

 - `pull_and_prune [branch=master]`  
   Pull `branch` and delete all dead/merged branches.  
   *Useful for staying up-to-date with an active remote, while keeping your local repo tidy*

## Installation

`branch-manager` is built to work with [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh/), so you’ll need that installed first.

1. `$ cd ~/.oh-my-zsh/custom/plugins` (you may have to create the folder)
2. `$ git clone git@github.com:elstgav/branch-manager.git`
3. In your .zshrc, add `branch-manager` to your oh-my-zsh plugins:
   
  ```bash 
  plugins(rails git branch-manager)
  ```


## Changelog

#### 1.3.1 April 17, 2020

- Change `pull_and_prune` branch deletion message color  
  *Changed from red (danger) to yellow (warning), since branch deletion is expected behavior.*

#### 1.3 April 16, 2020

- Add `pull_and_prune` command

#### 1.2.1 April 14, 2020

- Colorize status messages
- Print message when restoring stashed changes

#### 1.2 April 14, 2020

- Auto-stashing now includes untracked files
- Removes “no stash” feedback to reduce noise

#### 1.1.1 October 16, 2017

- Fix warning messages if post-checkout hook doesn’t exist (#2)

#### 1.1 October 16, 2017

- Added a rebase_branch command (Thanks @blimmer!)

#### 1.0 February 2, 2016

