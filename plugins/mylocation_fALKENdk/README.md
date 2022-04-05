# mylocation
oh-my-zsh plugin to show your current location based on ip

## Installation

### [Antigen](https://github.com/zsh-users/antigen)

Add `antigen bundle KasperChristensen/mylocation` to your `.zshrc` with your other bundle commands.

Antigen will handle cloning the plugin for you automatically the next time you start zsh. You can also add the plugin to a running zsh with `antigen bundle KasperChristensen/mylocation` for testing before adding it to your `.zshrc`.

### [Oh-My-Zsh](http://ohmyz.sh/)

1. `cd ~/.oh-my-zsh/custom/plugins`
2. `git clone git@github.com:KasperChristensen/mylocation.git`
3. Add *mylocation* to your plugin list - edit `~.zshrc` and change `plugins=(...)` to `plugins=(... mylocation)`

### [Zgen](https://github.com/tarjoilija/zgen)

Add `zgen load KasperChristensen/mylocation` to your `.zshrc` file in the same function you're doing your other `zgen load` calls in. Zgen will handle automatically cloning the plugin for you the next time you do a `zgen save`.

