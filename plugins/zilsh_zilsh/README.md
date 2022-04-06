# Zilsh
Zilsh is a Zshell configuration framework designed to *get the fuck out of your
way.*

Zilsh started as a fork of oh-my-zsh, but totally ceased being that within a
week.  Now it's a better system, but it's still 100% compatible with oh-my-zsh,
via the wonderful [oh-my-zilsh](https://github.com/NuckChorris/oh-my-zilsh)
bundle, which should stay (fairly) close to oh-my-zsh's HEAD.

I've designed this specifically for the crazy power users who want to go through
the manual labor of configuring their shell by hand, just to get every detail
perfect.

It's not feature-rich; it's feature-less.  By design.  It weighs in at under 100
lines (97 to be precise).

I use it for my
[dotfiles](https://github.com/NuckChorris/dotfiles/tree/master/zsh), and you
totally should too (not that I'm biased or anything).

# Why Not _________?
Well, I'll go down the list of other options:

 * **antigen** — Probably the best alternative to zilsh, in all honesty;
 however, it follows the Vundle approach, not the Pathogen approach.  Not that
 that's bad, it's not!  It's just not how I like to do things.  I like manually
 controlling my plugins as git submodules.  Plus zilsh is over 600 lines
 shorter than antigen.
 * **oh-my-zsh** — This is actually a damn good option as far as monolithic
 template-based configuration systems go.  However, it has its own update system
 which is not really compatible with dotfiles repositories, and the fact that 
 you work inside of it instead of around it results in some [entertaining
 bugs](https://github.com/robbyrussell/oh-my-zsh/issues/1423).  Also, if you
 don't like monolithic solutions (I don't), you probably never liked it at all.
 * **prezto** — This is far less monolithic, but still template-based and so
 doesn't really work as a git submodule.
 * **Doing It Yourself** — Why the fuck would you do this when you could just
 use zilsh?

All other solutions right now revolve around templates.  You install the 
template, and then build your modifications on top.  While this is an okay
solution in some cases (quick start with ZShell), it's really not good for those
of us with dotfiles repositories.

# Installation
## As a git submodule (recommended)
Simply add this git repository as a submodule, and add the following to the top
of your `.zshrc`:

	source ~/.zsh/zilsh/zilsh.zsh
	_zilsh_init "~/.zsh/bundle/"

## The manual way

	$ cd ~/.zsh
	$ git clone https://github.com/NuckChorris/zilsh.git

And then add the following to the top of your `.zshrc`:

	source ~/.zsh/zilsh/zilsh.zsh
	_zilsh_init "~/.zsh/bundle/"

# Configuration
Zilsh provides a number of useful configuration options which allow you to fine-
tune it to your exact needs.

## colors
If you want fancy-schmancy colors in the logging messages (as well as the
helpers of `$fg`, `$bg`, `$color_reset`, etc.) you should add the following
above where you source zilsh:

	autoload -U colors && colors

## `$ZILSH_VERBOSITY`
Set this variable to control the logging level of Zilsh.
 * `3` — Shows debug, warning, and error messages.  Generally not required
 unless you're actually working on Zilsh itself.
 * `2` — **(DEFAULT)** Shows warning and error messages. This is recommended for
 everyday usage; warnings are no less evil than errors, except they aren't
 immediately harmful and Zilsh still loads.
 * `1` — Shows error messages.  This one sounds safe at first, *but it isn't.*
 Trust me, you don't want to use this setting.  Yes, it bitches at you less, but
 you won't see deprecation warnings and so upgrading is dangerous.
 * `0` — no logging, not even errors.  Probably a bad idea.

## ZShell Bundles
A ZShell Bundle is a directory containing a set of related functions, utilities,
completions, etc. in the same layout as a full oh-my-zsh install.

**HOWEVER**, there is one difference: lib/ is now configs/ (though lib/ still
works for legacy reasons, it is strongly recommended that you do not use it)

### Backwards Compatibility
In case you haven't already figured it out, it's easy to use anything designed
for oh-my-zsh (including oh-my-zsh's builtins) — just drop it in a bundle, and
it'll work like always.

An example of an oh-my-zsh wrapper bundle is provided in
[oh-my-zilsh](https://github.com/NuckChorris/oh-my-zilsh).

# Future plans
 * Clean up the zshBundle layout and reduce legacy shit.
 * Add support for zsh-syntax-highlighting highlighters to zshBundles

# Contribution
All contributions should follow the coding styles set out by surrounding code.

Indent with tabs; align with spaces. Yes, let me repeat that: **INDENT WITH
TABS; ALIGN WITH SPACES**.  Got it?  Good.

