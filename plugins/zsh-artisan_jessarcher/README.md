<p align="center">
    <img src="https://jessarcher.github.io/zsh-artisan/logo.svg?1" alt="zsh-artisan - Enhanced Laravel integration for zsh" width="400">
</p>

This plugin adds an `artisan` shell command with the following features:

* It will find and execute `artisan` from anywhere within the project file tree
  (and you don't need to prefix it with `php` or `./`)
* It provides auto-completion for `artisan` commands (that also work anywhere
  within the project).
* You can specify an editor to automatically open new files created by `artisan
  make:*` commands

<p align="center">
    <img src="https://jessarcher.github.io/zsh-artisan/demo.svg?1">
</p>


## Usage

Simply use the command `artisan` from anywhere within the directory structure of
a Laravel project and it will search up the tree for the `artisan` command and
execute it. E.g:

```zshrc
$ pwd
~/MyProject/tests/Feature

$ artisan make:model MyAwesomeModel
Model created successfully.
```

Tab-completion will work anywhere that `artisan` can be found, and the available
commands are retrieved on-demand. This means that you will see any Artisan
commands that are available to you, including any custom commands that have
been defined.

## Acknowledgements

* [antonioribeiro/artisan-anywhere](https://github.com/antonioribeiro/artisan-anywhere)
  for some of the initial artisan location logic
* The `laravel5` plugin that comes with oh-my-zsh for the initial completion
  logic
* [ahuggins/open-on-make](https://github.com/ahuggins/open-on-make) for the
  "open on make" functionality idea. Unfortunately, adding a dev dependency like
  this isn't an option on some of the projects I work on.

