# Dotfiles Sync Plugin using Git  for Oh My Zsh
An Oh My Zsh plugin to keep your dotfines in sync across multiple PCs using Git.  

## Features
- Sets up Git repository in user's home directory to keep a track on whitelisted files & directories
- Provides simple CLI interface to commit, upload and download dotfiles from remote repository

## Installation
```
$ sh <(curl -sL https://raw.githubusercontent.com/vladmyr/dotfiles-plugin/master/install.sh) 
```

## Under the hood
Whole plugin is a tiny bash script wrapper around Git commands. An idea is to have a Git repository at user's home directory and whitelist only a specific files and directories to keep a track on. In order to achieve that plugin relies on a special file named `.gitinclude`. `.gitinclude` is used to achieve exactly the same behaviour as with `.gitignore`, except it contains a whitelist of all FS paths.

## Changelog
- 0.1.0
  - Basic set of CLI commands
  - Installation script

## License
MIT
