Racó Tècnic ZSH Theme
=====================

ZSH theme based on Andy Fleming's theme [af-magic](https://coderwall.com/p/3xcpyg) and inspired by the [posh-git](https://github.com/dahlbyk/posh-git) features.

![screenshot](screenshot.png)

Installing
----------

As [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh) is not accepting more themes right now, you will need to manually download and install the theme in your themes folder.

## oh-my-zsh

If you use oh-my-zsh you can do...

```bash
# using CURL
curl -L https://github.com/elboletaire/zsh-theme-racotecnic/raw/master/racotecnic.zsh-theme > ~/.oh-my-zsh/themes/racotecnic.zsh-theme
# using wget
wget --no-check-certificate -O ~/.oh-my-zsh/themes/racotecnic.zsh-theme https://github.com/elboletaire/zsh-theme-racotecnic/raw/master/racotecnic.zsh-theme
```

After that simply change the `ZSH_THEME` value to `racotecnic`:

```bash
# ~/.zshrc
ZSH_THEME="racotecnic"
```

## zgen

If you're using [zgen](https://github.com/tarjoilija/zgen), you can add `zgen load elboletaire/zsh-theme-racotecnic` to your zgen load list and regenerate init.zsh with `zgen save`. Zgen will take care of cloning the repository for you automatically.

The Prompt
----------

The prompt is similar to the posh-git prompt with two little differences:

- The zeros have been removed, in order to give up some space to the term.
- If you have stashed changes it will appear an asterisk in the right side of the left prompt.

The status summary has the following format:

    [{HEAD-name} +A ~B -C !D | +E ~F -G !H ! *]

* `{HEAD-name}` is the current branch, or the SHA of a detached HEAD
 * Blue means the branch matches its remote
 * Green means the branch is ahead of its remote (green light to push)
 * Red means the branch is behind its remote
 * Yellow means the branch is both ahead of and behind its remote
* ABCD represent the index; EFGH represent the working directory
 * `+` = Added files
 * `~` = Modified files
 * `-` = Removed files
 * `!` = Conflicted files
 * As in `git status`, index status is dark green and working directory status is dark red
* The trailing `*` represents stashed changes
* The trailing `!` means there are untracked files

Based on work by
----------------

- [Keith Dahlby (posh-git)](https://github.com/dahlbyk)
- [Andy Fleming (af-magic theme)](https://github.com/andyfleming)

