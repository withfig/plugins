# Tipz

Tipz is a small ZSH plugin, which gives you helpful hints when you execute a command for which you have an alias defined.

## Example

[![asciicast](https://asciinema.org/a/4xlg93jg6dw9z20wn4supy4ru.png)](https://asciinema.org/a/4xlg93jg6dw9z20wn4supy4ru)

## Installation

### [Zulu](https://github.com/zulu-zsh/zulu)

```sh
zulu install tipz
```

### Manual

```sh
git clone https://github.com/molovo/tipz tipz && cd tipz
echo "source $(pwd)/tipz.zsh" >> ${ZDOTDIR:-$HOME}/.zshrc
```

## Configuration

You can customize the prefix text if you'd like, by setting `TIPZ_TEXT`

```sh
TIPZ_TEXT='💡 '
```

## License

Copyright (c) 2016,2017 James Dinsdale <hi@molovo.co> (molovo.co)

Tipz is licensed under The MIT License (MIT)

## Team

* [James Dinsdale](http://molovo.co)

## Related

* **[alias-tips](https://github.com/djui/alias-tips)** - A Python implementation of the same concept  

