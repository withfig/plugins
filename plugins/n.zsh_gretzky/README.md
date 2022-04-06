# n.zsh

a zsh plugin for auto-switching node versions based on project environment using [n](https://github.com/tj/n)

## installation

### prerequisites

- jq

```bash
brew install jq
```

### antigen

```bash
antigen bundle gretzky/n.zsh
```

### zplugin

```bash
zplugin load gretzky/n.zsh
```

### zgen

```bash
zgen load gretzky/n.zsh
```

### oh-my-zsh

- cd `~/.oh-my-zsh/custom/plugins`
- `git clone https://github.com/gretzky/n.zsh`
- add `n.zsh` to `plugins=()` in your `.zshrc`

## usage

on its own, `n.zsh` will check for a `package.json` in the current directory. if it exists, it checks and reads the value of the node engine, and then switches to that version using n.

if the node engine reads 'greater than', `n` switches to node stable. otherwise, it switches to the specified version.

