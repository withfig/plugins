`emoji-cli` provides input completion for emoji on the command line with an interactive filter.

## Features

- 😱 Emoji on the command line
- 🌐 Interactive filter
- 🔎 Fuzzy search

## 🔍 Usage

To insert emoji to the command line, type ctrl-s ( <kbd>^s</kbd> ).

```console
$ git commit -m 'This docume^s ...
```

To collaborate [`emojify`](https://github.com/mrowa44/emojify) similar to `emoji-cli` in emoji appication:

```console
echo ":santa^s" | emojify
🎅
```

### Dependencies

- [`jq`](https://stedolan.github.io/jq/)
- An interactive filter ([`fzf`](https://github.com/junegunn/fzf), [`peco`](https://github.com/peco/peco)...)

#### 🍺 Using Homebrew
On macOS you can install the dependencies via [Homebrew](http://brew.sh/):

```
brew install jq fzf peco
```