# muslim

A simple minimal zsh prompt theme.

![The screen](https://raw.github.com/nksoff/muslim/master/screen.png)

## Features
- displays current working directory (sic!)
- changes terminal title to currrent working directory
- shows if current user is root (prompt symbol, `❯❯❯` for root, `❯` else)
- shows if latest command executed successfully (by color of prompt symbols `❯`)
- displays username and host (optional, true for ssh shell by default)
- displays if current working directory is inside git repo
- displays in git repo:
    1. current branch (or commit hash in detached state)
    2. time since last commit (days, hours, minutes)
    3. if you need to pull (current state is behind remote repo state) with `⬇`
    4. if you need to push (current state is ahead remote repo state) with `⬆`
    5. if you have untracked files with `◼`
    6. if you have added files with `✚`
    7. if you have modified files with `✱`
    8. if you have deleted files with `✖`
    9. if you have renamed files with `➜`
    10. if you have conflicts during merge with `!?`

# Installation

### [antigen](https://github.com/zsh-users/antigen)

Add to your `.zshrc`:

```
antigen theme nksoff/muslim muslim
```

### [zplug](https://github.com/zplug/zplug)

Add to your `.zshrc`:

```
zplug "nksoff/muslim"
```

### [zgen](https://github.com/tarjoilija/zgen)

Add to your `.zshrc`:

```
zgen load nksoff/muslim muslim
```

### [antibody](https://github.com/getantibody/antibody)

Add to your `.zshrc`:

```
antibody budle nksoff/muslim
```

### [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh)

Clone repo, copy theme:
```
git clone https://github.com/nksoff/muslim
mkdir -p ~/.oh-my-zsh/custom/themes
cp muslim/muslim.zsh-theme ~/.oh-my-zsh/custom/themes
```

Add to your `.zshrc`:
```
ZSH_THEME="muslim"
```

### [prezto](https://github.com/sorin-ionescu/prezto)

Clone repo, copy theme:
```
git clone https://github.com/nksoff/muslim ~/.zprezto/modules/prompt/external/muslim
ln -s ~/.zprezto/modules/prompt/external/muslim/muslim.zsh-theme ~/.zprezto/modules/prompt/functions/prompt_muslim_setup
```

Add to your `.zpreztorc`:
```
zstyle ':prezto:module:prompt' theme 'muslim'
```

### Manual

Surely, if you do not use any plugin managers, you know how to include custom theme.

```
git clone https://github.com/nksoff/muslim ~/.muslim
echo 'source ~/.muslim/muslim.zsh-theme' >> ~/.zshrc
```

# Inspired by
- [geometry theme](https://github.com/frmendes/geometry) by frmendes
- [pure theme](https://github.com/sindresorhus/pure) by sindresorhus
- [sunrise theme](https://github.com/robbyrussell/oh-my-zsh/blob/master/themes/sunrise.zsh-theme) from oh-my-zsh

