# Copy Pasta

<!-- toc GFM -->

* [Compatibility](#compatibility)
* [Installation options:](#installation-options)
* [Usage](#usage)

<!-- tocstop -->

Use at your own risk. I use it daily without trouble, and have tried my best to make it safe to use, but I'm not responsible if it causes you to delete files by accident. Cheers!


[![asciicast](https://asciinema.org/a/etRqNM09mR9CgLRCVYAPQqM9d.svg)](https://asciinema.org/a/etRqNM09mR9CgLRCVYAPQqM9d)

Copy Pasta is a shell utility which let's you copy and paste in your terminal as you're used to doing in your GUI.

It works like this:

```sh
# Copy some files
copy cool-file.txt best-dir-around/

# Take your time looking around and find your destination
cd ../../some-other-place
cd other-cool-subdir

# 'pasta' to dump what you've copied into your current working directory
pasta
```

Copy Pasta doesn't pollute your clipboard, and even works across different terminals!

I use it a lot when I have two tmux panes open for different projects and I just want to copy-paste some files over, I can `copy *` in one pane, switch panes, then `pasta`!

## Compatibility

Copy Pasta should work on most linux and mac machines, and works with most bash-compatible shells.

## Installation options:

* copy-paste `copy-pasta.plugin.zsh` onto your machine and source it from your shell's `rc` file. (E.g. `~/.bashrc` or `~/.zshrc`)
* Add to your ZSH plugin manager as `ChrisPenner/copy-pasta`

## Usage

```
Usage:

  copy <files and directories to copy>

  pasta [destination dir]
    If destination dir is omitted the current directory is used.
    If the destination dir does not exist it will be created.
```

