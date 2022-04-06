# codeception-zsh-plugin

`codeception-zsh-plugin` is a zsh plugin for
[Codeception Testing Framework](http://codeception.com/). This plugin can be install into oh-my-zsh [custom plugin](https://github.com/robbyrussell/oh-my-zsh#customization) folder.

![Screenshot1](https://raw.github.com/shengyou/codeception-zsh-plugin/master/images/codeception.gif)

## Installation for oh-my-zsh

1. In the command line, change to `oh-my-zsh` plugins directory:

    ```console
    $ take ~/.oh-my-zsh/custom/plugins
    ```

2. Clone the repository into a new directory called `codeception`:

    ```console
    git clone https://github.com/shengyou/codeception-zsh-plugin.git codeception
    ```

3. Include `codeception` plugin to your .zshrc file along with other plugins:

    ```zsh
    ...
    plugins=(osx brew git laravel codeception)
    ...
    ```

4. Restart your terminal application.

## TODO & Bugs

* `--config` disappear when typing `--`
* smarter way to complete options

## Additional information

Inspired by and based on:

* [Sorbing's commit for oh-my-zsh (laravel)](https://github.com/Sorbing/oh-my-zsh/commit/62bee9aa82aadfdc033bc44c624f78c07af10062)

Tutorials about how to write your own completion functions:

* [ZSH – Writing own completion functions](http://askql.wordpress.com/2011/01/11/zsh-writing-own-completion/)
* [Writing Zsh Completion for Padrino](http://wikimatze.de/writing-zsh-completion-for-padrino.html)

## Contact
Shengyou Fan (If you like it, please endorse me on coderwall) [![endorse](https://api.coderwall.com/shengyou/endorsecount.png)](https://coderwall.com/shengyou)

Any questions, feel free to [contact me](http://twitter.com/shengyou).
