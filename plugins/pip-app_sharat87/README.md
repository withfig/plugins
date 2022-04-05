# pip-app

There are lots of apps and utilities written in python. These days they are
being distributed as packages to be installed with pip. While the installation
of those projects (like [localtunnel](/home/sharat/.pip-apps/manifest/nvpy),
[nvpy](/home/sharat/.pip-apps/manifest/nvpy)) says, `pip install nvpy`, its not
always that simple. I don't want to install the app and all its dependencies in
the system python. I want it to have its own virtualenv.

So, I create a virtualenv and install this app, it creates an executable, used
to run the app. But, as you might have guessed, everytime I need to run the app,
I have to first switch to this virtualenv. This just plain sucks.

Enter *pip-app*. Install an app with

    pip-app nvpy

It will create its own virtualenv and install itself in it. For every executable
introduced by this app, it creates an executable that will load the correct
virtualenv and launch the correct app, in a way that just bloody works.

And to uninstall,

    pip-unapp nvpy

# Installation

## Antigen

If you use [Antigen](https://github.com/zsh-users/antigen), add the following
command to your .zshrc with your other antigen bundle commands.

    antigen bundle sharat87/pip-app

## Zgen

If you use [Zgen](https://github.com/tarjoilija/zgen), add

    zgen load sharat87/pip-app

to your .zshrc along with your other zgen load commands.

## Without a Framework

If you aren't using a framework, just clone this repo or just download the
*pip-app.sh* file and add a source line to your `.bashrc` or `.zshrc` or
whatever is your shell's equivalent.

    source /path/to/pip-app.sh

You should have the `pip-app` and `pip-unapp` functions available now.

# Meta

This thing is licensed with [MIT License](http://mitl.sharats.me). Feedback,
problems, discussion, tweet at [@sharat87](http://twitter.com/sharat87) or open
up and issue on the [github project page](http://github.com/sharat87/pip-app).

