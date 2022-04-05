# zsh-aliases-exa

## Purpose

This zsh plugin enables a number of aliases extending `exa`, the modern replacement for `ls`.

## Use

To use it, you should first install [`exa`](https://the.exa.website). You can do so easily using [Homebrew](https://brew.sh) on the Mac:

```bash
brew install exa
```

Next, download this repo into your custom plugins directory. For my installation using [Oh My Zsh](https://ohmyz.sh/), I cloned the repo to `~/.oh-my-zsh/custom/plugins`.

Lastly, add `zsh-aliases-exa` to the plugins array of your zshrc file:

```bash
plugins=(... zsh-aliases-exa)
```

Restart your zsh session, and the aliases will be available.

## Aliases

```bash
# general use
alias ls='exa'                                                          # ls
alias l='exa -lbF --git'                                                # list, size, type, git
alias ll='exa -lbGF --git'                                             # long list
alias llm='exa -lbGd --git --sort=modified'                            # long list, modified date sort
alias la='exa -lbhHigUmuSa --time-style=long-iso --git --color-scale'  # all list
alias lx='exa -lbhHigUmuSa@ --time-style=long-iso --git --color-scale' # all + extended list

# specialty views
alias lS='exa -1'                                                              # one column, just names
alias lt='exa --tree --level=2'                                         # tree

```

*Note:* the `-d` option removes the display of files, filtering it to only show directories. I cannot identify a time when I want that, so I have not included it.

## Next Steps

* Add in zshrc options to configure options
  1. color
  2. date format
  3. alias profiles
  4. including git column
* Create function to configure different profiles of aliases, so that different alias groups can be enabled. For example, one profile may be for replacing `ls`, another may leave those commands alone and use ones based on `exa` only.

## Thanks

Big thanks to Oh My Zsh, Homebrew, and Exa for these terrific tools. They have made the command line fun again.

## Contributors

* [Darrin Tisdale](https://github.com/darrintisdale)

