# zjump

![zjump](zjump.gif)

## Usage

| cmd    |                                                      |
|---     |---                                                   |
| `j [query]`    | select from directory history                |
| `j .. [query]` | select from parent directories               |
| `j . [query]`  | select from sub directories                  |
| `j --purge`    | remove non-existing directories from history |



## Install
### Requirements
* Installed [fzf](https://github.com/junegunn/fzf)

### [zgem](https://github.com/qoomon/zgem)
`zgem bundle 'https://github.com/qoomon/zjump.git' from:'git' use:'zjump.zsh'`
### [zplug](https://github.com/zdharma/zplugin)
`zplug qoomon/zjump`
### [zgen](https://github.com/tarjoilija/zgen)
```
zgen load qoomon/zjump
zgen save
```
### [Antigen](https://github.com/zsh-users/antigen)
```
antigen bundle qoomon/zjump
antigen apply
```
### [Oh My ZSH! custom plugin](http://ohmyz.sh/)
```
git clone https://github.com/qoomon/zjump $ZSH_CUSTOM/plugins/zjump
plugins+=(zjump)
```
### [zplug](https://github.com/zplug/zplug)
`zplug "qoomon/zjump"`
### manually
```
git clone https://github.com/qoomon/zjump.git
source zjump/zjump.zsh
```

