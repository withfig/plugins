Install
-------

Use [zgen](https://github.com/tarjoilija/zgen) or antigen.  Here is how to do it with zgen:

    zgen load willghatch/zsh-saneopt

Alternatively, just source the .zsh file.  But seriously, use zgen.

What is this?
-------------

This plugin is meant to be a good baseline for zsh options.  In the spirit of 
[vim-sensible](https://github.com/tpope/vim-sensible), this plugin should provide sensible
defaults that everyone wants anyway.

Insanity!
---------

There are a couple options that might not be entirely agreeable to everyone, but *most*
people will probably want.  To affect how much possibly-controversial stuff you want,
set `ZSH_SANEOPT_INSANITY` before loading saneopt.  If it is not set, it will default to `1`.
`0` means only use the most agreeable settings.  Higher numbers mean more possible insanity.
(Well, theoretically.  At the moment 1 is the highest because I haven't decided which options
should belong at which level, so more insane things are left out.)

What kind of options are you cooking up in that lab of yours?
-------------------------------------------------------------

Just look at the .zsh file -- all the options have comments to explain what they do to some
degree, as I've found them all over the net.

Did I miss something?
---------------------

Let me know!  I've searched far and wide to know all of the options any sensible person might
want to use with zsh.  If I've missed something, or if you disagree and think my sanity is
actually insanity, add an issue or pull request.

License
-------

MIT license

(IE do what you like with it, but I'm not liable for any problems you have.)



