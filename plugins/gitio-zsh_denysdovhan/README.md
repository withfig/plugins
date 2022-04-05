![gitio-zsh](./preview.png)

# gitio ![zsh][zsh] [![MIT][mit-img]][mit-url]

> A zsh plugin for generating a GitHub short URL using [git.io](https://git.io).

Inspired by [tiny](https://github.com/fishery/tiny) utility by [Jorge Bucaran](https://github.com/bucaran).

## Install

### For antigen users

Add the following snippet `~/.zshrc` after the line `antigen use oh-my-zsh`:

```
$ antigen bundle denysdovhan/gitio-zsh
```

### For Zgen users

Add the following line to your `~/.zshrc` where you're adding your other zsh plugins:

```
zgen load denysdovhan/gitio-zsh
```

### Manually

If you don't use any plugin managers, follow these instructions:

1. Clone this repository to your favorite path (e.g. `~/zsh-extensions/gitio-zsh`)
2. `source` the file in your `.zshrc`
3. Restart your `zsh`

```sh
# Your .zshrc
source $HOME/zsh-extensions/gitio-zsh/gitio.plugin.zsh
```

## Usage

In git repo:

```zsh
gitio
```

In other directory:

```zsh
gitio <[https://github.com/]username/repo> [cool-url]
```

## License

[MIT][mit-url] © [Denys Dovhan](http://denysdovhan.com)

<!-- Reference -->

[zsh]: https://img.shields.io/badge/shell-zsh-brightgreen.svg?style=flat-square

[mit-img]: https://img.shields.io/badge/License-MIT-707070.svg?style=flat-square
[mit-url]: http://opensource.org/licenses/MIT

