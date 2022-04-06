print-alias
===========

![Test](https://github.com/brymck/print-alias/workflows/Test/badge.svg)
[![codecov](https://codecov.io/gh/brymck/print-alias/branch/master/graph/badge.svg)](https://codecov.io/gh/brymck/print-alias)

This prints commands with aliases expanded whenever you use an alias at the command line.

<img height="76" width="385" alt="demo" src="images/demo.png">

Usage
-----

With [zplug](https://github.com/zplug/zplug), add the following to your `~/.zshrc`:

```zsh
zplug "brymck/print-alias"
```

You can also use [Antigen](https://github.com/zsh-users/antigen):

```zsh
antigen bundle brymck/print-alias
```

And lastly, if you want to `source` it manually, you can also clone this repo and use:

```zsh
source path/to/print-alias.plugin.zsh
```

Configuration
-------------

You can change the line prefix as well as the format of expanded aliases and non-aliases.
You can exclude some specific aliases to be displayed.
You may as well prevent any command which has been redefined by an alias to be displayed (aliases such as `alias grep='grep --colour'` or `alias ls='ls -aF'`)

```zsh
export PRINT_ALIAS_PREFIX='  ╰─> '
export PRINT_ALIAS_FORMAT=$'\e[1m'
export PRINT_NON_ALIAS_FORMAT=$'\e[0m'

export PRINT_ALIAS_IGNORE_REDEFINED_COMMANDS=true
export PRINT_ALIAS_IGNORE_ALIASES=(my_alias my_other_alias)

zplug "brymck/print-alias"
```

The above will result in output such as the second line here:

<img height="41" width="259" alt="configuration" src="images/configuration.png">

