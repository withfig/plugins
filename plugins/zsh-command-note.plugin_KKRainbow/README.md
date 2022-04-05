# ZSH Plugin: A simple command reminder tool

## Introduction

A simple oh-my-zsh plugin to record some complex command and comment on that. It's a little bit better than kind of 
NoteBook softwares, for it's a native one.


## Installation

```bash
$ git clone https://github.com/KKRainbow/zsh-command-note.plugin ~/.oh-my-zsh/custom/plugins/zsh-command-note
```

add `` zsh-command-note `` to ~/.zshrc plugin list.


## Usage

```bash
# list all commands
$ s -list

# list single command
$ s -list xxx

# add a command
$ s -add

# edit a command
$ s -edit xxx

# remove a command
$ s -remove

# execute a command
$ s xxx
```

## TODO

- [x] auto compeletion
- [ ] more convient features
- [ ] command group support

