# gitignore.plugin.zsh [![Build Status](https://app.travis-ci.com/voronkovich/gitignore.plugin.zsh.svg?branch=master)](https://app.travis-ci.com/github/voronkovich/gitignore.plugin.zsh)

Zsh plugin for creating `.gitignore` files.

Installation
------------

[Antigen](https://github.com/zsh-users/antigen):

        antigen bundle voronkovich/gitignore.plugin.zsh

[Zplug](https://github.com/zplug/zplug):

        zplug voronkovich/gitignore.plugin.zsh

Or clone this repo and add this into your .zshrc:

        source path/to/cloned/repo/gitignore.plugin.zsh

Usage
-----

        gi TEMPLATE (will write rules to the standard output)

Or:

        gii TEMPLATE (will write output to the local .gitignore file)

Example:

        gi vim eclipse symfony

Custom templates
----------------

If you want to override an existing template or add your own custom one, you can use an environment variable `ZSH_PLUGIN_GITIGNORE_TEMPLATE_PATHS` (it behaves like the `$PATH` variable):

        export ZSH_PLUGIN_GITIGNORE_TEMPLATE_PATHS="$HOME/.gitignore_teplates:$ZSH_PLUGIN_GITIGNORE_TEMPLATE_PATHS:/etc/global_gitignore"

Updating templates
------------------

Every day the [Travis CI](https://docs.travis-ci.com/user/cron-jobs/) runs a job (see `tools/update-templates`) that updates a submodule with templates and commits the changes. So, templates are always up to date. You should just use `antigen update`.

Demo
----

![gif](http://i.imgur.com/NiaFzeh.gif)

License
-------

Copyright (c) Voronkovich Oleg. Distributed under the MIT.

