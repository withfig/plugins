# Vi-Increment

[![Gitter](https://badges.gitter.im/zsh-vi-more/community.svg)](https://gitter.im/zsh-vi-more/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![Matrix](https://img.shields.io/matrix/zsh-vi-more_community:gitter.im)](https://matrix.to/#/#zsh-vi-more_community:gitter.im)

Increment and decrement numbers easily with `Ctrl+a` and `Ctrl+x`:

## Usage

Vi-increment registers itself as a Vi change, so numeric prefixes
and the dot command can be used:

```zsh
$ 200             # 10<C-x>
$ 190             # 200.
$ -10             # .
$ -210
```

With `setopt octalzeroes`, Vi-increment will let Zsh-native arithmetic
detect octal numbers and preserve them:

```zsh
$ 0077            # <C-a>
$ 0100
```

Binary numbers are also detected and preserved:

```zsh
$ 0b100011        # 11<C-x>
$ 0b11000
```

Vi-increment will also preserve leading zeroes, and fully supports negative numbers:

```zsh
$ (( -0x0040 ))   # 8<C-a>
$ (( -0x0038 ))
```

## Features

- Operates in both `visual` and `vicmd` modes
- Preserves leading zeroes
- Preserves C-formatted hexadecimal numbers: `0x[hex]`
- Preserves C-formatted binary numbers: `0b[binary]`
- If `setopt OCTAL_ZEROES`: Preserves C-formatted octal numbers: `0[oct]`

Future features:

- Detect and preserve arbitrary zsh-format base `[base]#[num]`
- Preserve underscores

## Installation

**Antigen**:
```zsh
antigen bundle zsh-vi-more/vi-increments
antigen apply
```

**Zgen**:
```zsh
zgen load zsh-vi-more/vi-increment
zgen save
```


**Zplug**:
```zsh
zplug zsh-vi-more/vi-increment
```

**Zplugin**:
```zsh
zplugin ice wait "0"
zplugin light zsh-vi-more/vi-increment

# Optionally, track the latest development version:
zplugin ice wait "0" ver"dev"
zplugin light zsh-vi-more/vi-increment
```

**Manually**: Clone the project, and then source it:
```zsh
source /path/to/vi-increment/vi-increment.zsh
```

