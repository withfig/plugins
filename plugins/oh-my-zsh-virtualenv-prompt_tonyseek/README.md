oh-my-zsh::plugin::virtualenv-prompt
====================================

This is a fork of the virtualenv plugin from upstream. It support to customize
the virtualenv prompt in oh-my-zsh themes.

Installation
------------

You can install this plugin via [antigen](https://github.com/zsh-users/antigen):

    # $HOME/.zshrc
    source /usr/local/share/antigen.zsh

    antigen use oh-my-zsh
    antigen bundle tonyseek/oh-my-zsh-virtualenv-prompt
    antigen theme tonyseek/oh-my-zsh-seeker-theme seeker  # optional
    antigen apply

It could be upgraded by `antigen update` command.

Customize Theme
---------------

There are two constant strings which could be overrided in your custom theme.

- `ZSH_THEME_VIRTUAL_ENV_PROMPT_PREFIX`
- `ZSH_THEME_VIRTUAL_ENV_PROMPT_SUFFIX`

And the function `virtualenv_prompt_info` could be used in the prompt of your
theme.

Example
-------

See the [oh-my-zsh::theme::seeker](https://github.com/tonyseek/oh-my-zsh-seeker-theme).

