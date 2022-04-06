# auto-color-ls

zsh plugin to automatically `ls` using [colorls](https://github.com/athityakumar/colorls) on `cd`

## installation

### prerequisites

- colorls

```bash
gem install colorls
```

### antigen

```bash
antigen bundle gretzky/auto-color-ls
```

### zplugin

```bash
zplugin load gretzky/auto-color-ls
```

### zgen

```bash
zgen load gretzky/auto-color-ls
```

### oh-my-zsh

Run
```bash
( cd $ZSH_CUSTOM/plugins && git clone https://github.com/gretzky/auto-color-ls )
```

Then add `auto-color-ls` to `plugins=()` in your `.zshrc`

