# ZSH pipenv plugin

basically just translated [pipenv.fish](https://github.com/fisherman/pipenv/blob/master/conf.d/pipenv.fish)
into valid bash.

It automatically activates a pipenv when entering a directory if there is Pipfile in that directory

It also turns on pipenv tab completion

## Install

to install just clone this project into your `$ZSH_CUSTOM/plugins` directory

`git clone https://github.com/owenstranathan/pipenv.zsh.git $ZSH_CUSTOM/plugins/pipenv`

and then add this plugin to your `plugins` array in `~/.zshrc`

`plugins+=(pipenv)`

## FYI

if you don't want zsh to shadow the virtualenv flair on your prompt you'll need to use this plugin 
with the `virtualenv` plugin aswell


