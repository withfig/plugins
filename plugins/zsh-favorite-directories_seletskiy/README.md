# zsh favorite directories

![favorites](https://cloud.githubusercontent.com/assets/674812/16184028/a4794f6c-36da-11e6-95f7-ad1d3ae7bbf4.gif)

# Installation

## zgen

```
zgen load seletskiy/zsh-favorite-directories
```

# Usage

## Defining keybinding

```
bindkey -v '^_' "favorite-directories:cd"
```

## Defining favorite directories

### In .zshrc

```
favorite-directories:get() {
    echo <name> <depth> <path>
    ...
}
```

Like:

```bash
favorite-directories:get() {
    echo sources 1 ~/sources
    echo zsh 2 ~/.zsh/.zgen
    echo vim 2 ~/.vim
}
```

## Defining custom actions after directory change

### In .zshrc

```
favorite-directories:on-cd() {
    prompt_lambda17_precmd

    zle reset-prompt
}
```

