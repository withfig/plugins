# ssh-connect
🐙 simple ssh manager. It looks for your previous ssh sessions in `$HISTFILE` and keeps relevant the ones that you reconnect to. Supports bash and zsh.

![demo](https://raw.githubusercontent.com/gko/ssh-connect/master/demo.gif)

## Installation

### Manually
```bash
git clone --recursive https://github.com/gko/ssh-connect
```
then in .bashrc or .zshrc:
```bash
source ./ssh-connect/ssh-connect.sh
```

### With [antigen](https://github.com/zsh-users/antigen)

In your .zshrc
```sh
antigen bundle gko/ssh-connect
```

## Like it?

:star: this repo

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2012-2016 Konstantin Gorodinskiy

