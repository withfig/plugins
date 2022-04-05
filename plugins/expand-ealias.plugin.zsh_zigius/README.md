## Expanding aliases in zsh
code taken from [here](https://wiki.math.cmu.edu/iki/wiki/tips/20140625-zsh-expand-alias.html) with slight modifications.

I wanted to make some of my zsh aliases behave like vim abbreviations: Namely, as soon as you press space, the alias is expanded and you see the expanded command before executing it. Since I have a large number of clunky aliases, I didn't want all aliases to be expanded by default.

Consequently, I came up with the following (based on something I first saw [here](http://blog.patshead.com/2012/11/automatically-expaning-zsh-global-aliases---simplified.html)).

```zsh
typeset -a ealiases
ealiases=()

function permealias () 
{ 
  alias "$*";
  echo ealias "$*" >> ~/.oh-my-zsh/custom/zsh-ealiases.zsh
}
function ealias()
{
  alias $1
  ealiases+=(${1%%\=*})
}

function expand-ealias()
{
if [[ $LBUFFER =~ "(^|[;|&])\s*(${(j:|:)ealiases})\$" ]]; then
    zle _expand_alias
    zle expand-word
fi
zle magic-space
}

zle -N expand-ealias

bindkey -M viins ' '    expand-ealias
bindkey -M emacs ' '    expand-ealias
bindkey -M viins '^ '   magic-space     # control-space to bypass completion
bindkey -M emacs '^ '   magic-space
bindkey -M isearch ' '  magic-space # normal space during searches
```

To define an expandable alias use ealias. The syntax of ealias is the same as that of alias For example, I use

```zsh
ealias gc='git commit'
ealias gp='git push'
ealias dsp='docker service ps'
ealias h='history | grep'

```

Create a separate file for your ealiases and place it in the following directory with the following name:
```sh
$ touch ${HOME}/.oh-my-zsh/custom/zsh-ealiases.zsh
```
and paste the above aliases or create your own
To add an ealias from the command line you can use the permealias function: 
```sh
$ permealias "dslogs='docker service logs -f --tail=100'"
```
The quotes order is important when entering an expandable alias because with more than one word because of the shell different evaluation of single quote and double quotes. [Further reading](http://stackoverflow.com/questions/6697753/difference-between-single-and-double-quotes-in-bash)

Now typing gc in a position where zsh expands a command will appear like you typed git commit.

## Installation
Your preferred zsh plugin manager, or just clone into ${HOME}/.oh-my-zsh/plugins/ and then add it as the last plugin in the list of oh-my-zsh plugins
```zsh
plugins=(zsh-nvm git docker brew node npm osx web-search zsh-syntax-highlighting ssh-agent expand-ealias)
```

## License
This page is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.](http://creativecommons.org/licenses/by-nc-sa/3.0/deed.en_US)

