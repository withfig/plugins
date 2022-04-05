# ZSH Plugin - Fast Node Manager (fnm)
ZSH Plugin to install and load the [Fast Node Manager (fnm)](https://github.com/Schniz/fnm).

## Installation
### Zinit
add the following to your `.zshrc`
```zsh
zinit light "dominik-schwabe/zsh-fnm"
```

to be sure, you get the completion run:
```zsh
zinit cclear
zinit compinit
```

## Configuration

### ZSH_FNM_NODE_VERSION
Set this environment variable to automatically install a node version and use it.  
e.g.
```zsh
export ZSH_FNM_NODE_VERSION="15.0.0"
```

## Similar Projects
 - [zsh-nvm](https://github.com/lukechilds/zsh-nvm)

