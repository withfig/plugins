# docker-aliases

Consult [source file](docker-aliases.plugin.zsh) for more details.


## Installation

### [zplug](https://github.com/zplug/zplug)

```zsh
zplug "webyneter/docker-aliases", use:docker-aliases.plugin.zsh
```

### [Antigen](https://github.com/zsh-users/antigen)

```zsh
antigen bundle webyneter/docker-aliases.git
```

### Manual

Download the latest released `docker-aliases.plugin.zsh` to `$ZSH/plugins/docker-aliases`: 
```shell
curl --create-dirs -o $ZSH/plugins/docker-aliases/docker-aliases.plugin.zsh -sL \
$(curl -s https://api.github.com/repos/webyneter/docker-aliases/releases \
| grep browser_download_url \
| head -n 1 \
| cut -d '"' -f 4)
```

Add `docker-aliases` to `plugins` in `~/.zshrc`.

Restart the shell.


## Note

No actions are `-f`orced by default: This is at user's discretion. 

