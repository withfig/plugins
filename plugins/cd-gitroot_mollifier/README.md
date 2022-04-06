# cd-gitroot

## Synopsis
zsh plugin to change directory to git repository root directory

Inspired by [id:hitode909 blog post](http://hitode909.hatenablog.com/entry/20100211/1265879271).

## How to set up

### Manually install

Put cd-gitroot and _cd-gitroot files somewhere in your $fpath and add the following line to your .zshrc:

```
autoload -Uz cd-gitroot
```

#### For example

```
# download all files
% cd /path/to/dir
% git clone https://github.com/mollifier/cd-gitroot.git
```

And add the following lines to your .zshrc:

```
fpath=(/path/to/dir/cd-gitroot(N-/) $fpath)

autoload -Uz cd-gitroot
```

### Installing using Antigen
If you use [Antigen](https://github.com/zsh-users/antigen), add the following line to your .zshrc:

```
antigen bundle mollifier/cd-gitroot
```
### Using Oh-my-zsh:
If you use [Oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh):

1. Clone this repository in oh-my-zsh's plugins directory:

        git clone https://github.com/mollifier/cd-gitroot.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/cd-gitroot
you
2. Activate the plugin in `~/.zshrc`:

        plugins=( [plugins...] cd-gitroot)

3. Source `~/.zshrc`  to take changes into account:

        source ~/.zshrc
### Installing using Zgen
If you use [zgen](https://github.com/tarjoilija/zgen), add the following to your `.zshrc`
```
zgen load mollifier/cd-gitroot
```
to your `.zshrc` with your other `zgen load` commands.

You can set alias to this function.
e.g.

```
alias cdu='cd-gitroot'
```

## Usage

```
cd-gitroot [PATH]
```

If PATH isn't specified, change directory to current git repository root directory.
else change directory to PATH instead of it.
PATH is treated relative path in git root directory.

## Options
\-h display help and exit


