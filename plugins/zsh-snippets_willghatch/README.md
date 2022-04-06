Install
-------

For the lazy:

    git clone https://github.com/willghatch/zsh-snippets.git
    echo "source zsh-snippets/snippets.plugin.zsh" >> ~/.zshrc

Better, use [zgen](https://github.com/tarjoilija/zgen) or antigen.  Here is how to do it with zgen:

    zgen load willghatch/zsh-snippets


The Magic
---------

Expand text anywhere on the command line, like aliases.

    ps aux tg! # ! represents cursor position
    # M-x snippet-expand, or hopefully you bind it to a key
    ps aux | grep! # ! is your new cursor position

Add snippets

    snippet-add d "/my/long/directory/or/something like that"
    # then you can expand d to... that long thing

List snippets

    help-list-snippets # pulls up help in a your pager
    # or
    # M-x run-help-list-snippets -- does the same thing

This snippet stuff has been floating around in a few different forms and names.  I think the first version was from http://zshwiki.org/home/examples/zleiab.  My version adds some (in my opinion) handy interface functions, and packages it in a plugin for easy use with antigen.

License
-------

I've seen parts of this code all over the web, so I assume it's fair game.  All my contributions I dedicate to the public domain.


