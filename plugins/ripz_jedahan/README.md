### :warning: unmaintained
> let me (@jedahan) know if you want to take over, but the code is pretty hacky

# ripz - alias tips powered by ripgrep

ripz reminds you of your aliases, so you use them more

![ripz](ripz.png)

## installation

ripz depends on [ripgrep](github.com/BurntSushi/ripgrep)

    cargo install ripgrep

### [zplug]()

    zplug jedahan/ripz

### manual

    git clone https://github.com/jedahan/ripz ripz && cd ripz
    echo "source $(pwd)/ripz.zsh" >> ${ZDOTDIR:-$HOME}/.zshrc

## related

* [tipz](github.com/molovo/tipz) a zsh implementation and inspiration for ripz
* [alias-tips](https://github.com/djui/alias-tips) - a python implementation

