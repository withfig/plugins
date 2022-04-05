# Zsh Dircycle

A [Zsh](https://www.zsh.org) plugin for cycling through [the directory stack](https://www.gnu.org/software/bash/manual/html_node/The-Directory-Stack.html).

## Installation

### Framework

You can use the [Zsh framework](https://github.com/unixorn/awesome-zsh-plugins/blob/master/README.md#frameworks) of your choice to install Zsh Dircycle. For example, if you're using [Antigen](https://github.com/zsh-users/antigen), add `antigen bundle michaelxmcbride/zsh-dircycle` to your `$ZDOTDIR/.zshrc` [startup file](http://zsh.sourceforge.net/Intro/intro_3.html). Generic installation instructions for additional frameworks can be found [here](https://github.com/unixorn/awesome-zsh-plugins/blob/master/README.md#installation).

### Manual

1. Do one of the following:
   - Clone this repository.
   - Download an archive of this repository and extract its contents.
2. Add `source {directory}/dircycle.zsh` to your `$ZDOTDIR/.zshrc` [startup file](http://zsh.sourceforge.net/Intro/intro_3.html), where `{directory}` is the path of the directory containing the [`dircycle.zsh`](./dircycle.zsh) file.

## Usage

- Press the `Control` + `Shift` + `Left` key combination to cycle backward through the directory stack.
- Press the `Control` + `Shift` + `Right` key combination to cycle forward through the directory stack.

## Credits

Inspired by and borrowed from:

- [Oh My Zsh's dircycle plugin](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/dircycle)
- [zeet's dircycle.zsh](https://github.com/mafredri/zeet/blob/master/dircycle.zsh)

## License

[MIT](./LICENSE)

