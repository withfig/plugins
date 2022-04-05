# Git Rebase
Antigen/zsh script to aid with Git rebasing 

## Install

Make sure you have [Antigen](https://github.com/zsh-users/antigen) installed, then add the following line to your `.zshrc` file:

`antigen bundle smallhadroncollider/antigen-git-rebase`

## Usage

When you want to perform a rebase run `rebase`. This will automatically stash any changes in the working directory, display a numbered list of recent commits, and then ask you at which point you'd like to rebase from. Once rebasing is complete the stash will be popped back into the current working directory.

