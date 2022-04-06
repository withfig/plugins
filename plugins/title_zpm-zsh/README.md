# Zsh title

A zsh plugin that allows you to set a terminal header like any of PROMPT

![Screenshot](screenshot.png)

Now you can set title, for example:

```sh
PROMPT_TITLE='$USER@$HOST:$PWD'
```

## Installation

### Using [zpm](https://github.com/zpm-zsh/zpm)

Add `zpm load zpm-zsh/title` into `.zshrc`

### Using [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh)

Execute `git clone https://github.com/zpm-zsh/title ~/.oh-my-zsh/custom/plugins/title`. Add `title` into plugins array in `.zshrc`

### Using [antigen](https://github.com/zsh-users/antigen)

Add `antigen bundle zpm-zsh/title` into `.zshrc`

### Using [zgen](https://github.com/tarjoilija/zgen)

Add `zgen load zpm-zsh/title` into `.zshrc`

