Install
-------

Use [zgen](https://github.com/tarjoilija/zgen) or antigen.  Here is how to do it with zgen:

    zgen load willghatch/zsh-cdr
    # be sure to load zaw AFTER this, if you use zaw
    #zgen load zsh-users/zaw

Alternatively, just source the .zsh file.  But seriously, use zgen.

What is this?
-------------

`cdr` is a zsh command and some hook scaffolding to let you switch to recently used directories.
It is particularly useful with its [zaw](https://github.com/zsh-users/zaw) plugin, letting you
do awesome filtering on your list of recent directories.

I did not make cdr -- it's shipped with zsh.  But you have to find out about it and configure it.
This simplifies that.  It sets it all up, hassle free, so you can simply turn it on with one
`zgen load` line in your zshrc.

Options?
--------

You can set `ZSH_CDR_DIR` to your liking before loading this plugin, and it will be respected.
Otherwise it will go in `$XDG_CACHE_HOME`.  If you want to configure more than that... just
look in the source of this plugin or do a web search for how to set up cdr and have at it.
This plugin is just to have the easiest possible setup.

Note
----

Be sure to load this plugin before loading [zaw](https://github.com/zsh-users/zaw), because there
is a zaw source for cdr that is only loaded if cdr already is.

License
-------

Same license as zsh.


