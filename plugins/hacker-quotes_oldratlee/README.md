🎩 hacker-quotes
============================

An [`oh-my-zsh`](https://github.com/robbyrussell/oh-my-zsh) plugin, just print a hacker quote randomly when you open a terminal.

![Screenshot](images/preview.png)

How to install
--------------

To install `hacker-quotes` under `oh-my-zsh`:

Step 1: Clone this repository in `oh-my-zsh`'s plugins directory:

```bash
git clone https://github.com/oldratlee/hacker-quotes.git ~/.oh-my-zsh/custom/plugins/hacker-quotes
```

Step 2: Activate the plugin in `~/.zshrc`:

```bash
plugins=([plugins...] hacker-quotes)
```

Congratulations! Open a new terminal and check it! :sparkles:

Additional Configuration
------------------------

Default only print hacker quotes when shell is a interactive login shell.

If you want just checking for an interactive shell, set var `ZSH_HACKER_QUOTES_ENABLE_WHEN_INTERACTIVE`.

For example:

```bash
ZSH_HACKER_QUOTES_ENABLE_WHEN_INTERACTIVE= zsh -i
```

More zsh plugins
--------------------

[![Awesome zsh plugins](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/unixorn/awesome-zsh-plugins)

