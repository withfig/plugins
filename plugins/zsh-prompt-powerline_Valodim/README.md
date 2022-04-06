ZSH Powerline Prompt
==

This is a fairly heavyweight zsh prompt, based on the powerline font from the
popular eponymous vim plugin, which works well for a dark background.

To use it properly, you will obviously need to have a powerline patched font.
For details, see here: https://github.com/Lokaltog/vim-powerline

Since the wiki (and with it, the prepatched fonts) in that repository were
taken down, I added a bunch of prepatched fonts to this repository.  See below
for installation instructions.

This prompt uses promptsubst. It does not use a right-side prompt, although
RPROMPT will be cleared on load time to ensure compatibility.


Overview
--

The prompt has a number of informational tidbits, most of which are shown only
when relevant. The minimal appearance in my regular setup looks like this:

![](http://mugenguild.com/~valodim/powerline/plain.png)

Without configuration, a username is also shown. However, I find this to be an
unnecessary piece of information, so I usually hide it if it's my default
username, which can be configured using a zstyle (see below). In directories
which are not owned or not writable by $UID, a lock is shown, its color
indicating the read/write status:

![](http://mugenguild.com/~valodim/powerline/userindicator.png)

Running background jobs and non-zero return values adds extra segments:

![](http://mugenguild.com/~valodim/powerline/returnjob.png)

If $PWD is inside a repository, info about that is displayed as well. In its
vanilla form, a repository type indicator is shown, next to the current branch
name, and two small indicators for changes in the working tree and staging
area. The slash at the repository base will also be colored:

![](http://mugenguild.com/~valodim/powerline/vcsinfo.png)

There is also an indicator for the current SHLVL:

![](http://mugenguild.com/~valodim/powerline/shlvl.png)


Installation
--

To use this prompt, you will need to have a powerline patched font. The easiest
way to get that is to copy one of the packaged .ttf fonts into ~/.fonts then
run fc-cache, although this may or may not work depending on your distribution
(works in debian). After that, tell your terminal emulator to use it, which is
usually done in .Xresources. Here's what I use for rxvt-unicode:

    urxvt*font:     xft:Bitstream Vera Sans Mono for Powerline:pixelsize=12

You can also use the fontpatcher application from the vim-powerline repository
linked above to patch your own fonts.

Unfortunately, there is no way to know at load time if the font used to display
the prompt will be a powerline patched font (or if there is, I would like to
hear about it), so compatibility is a matter of heuristics. Personally, I
simply check if TERM is rxvt-unicode-256 colors in my zshrc and fall back to
another, simpler prompt if it isn't.

For some sample configs, check out example\_config.zsh.


Hooks
--

This prompt can work with hooks. There are four hooks provided in separate
files, adding various functionalities:


### git info

![](http://mugenguild.com/~valodim/powerline/gitinfo.png)

This hook adds extra information for git, namely how far the current branch is
ahead or before the one it is tracking, and the number of stashed commits.

### lofi

![](http://mugenguild.com/~valodim/powerline/lofi.png)

This hook stops vcs\_info right after detection step, before any expensive
operations are done. Only the vcs type is shown and the repository is marked in
the path. Once any vcs command is run, the vcs\_info returns to normal. There
is also a widget to do that, which is bound to ^G^L by default.

### disambiguate

![](http://mugenguild.com/~valodim/powerline/disambiguate.png)

This hook replaces the path, which is normally shortened to the last three
directories, with a non-ambiguous prefix version.

### signal names

![](http://mugenguild.com/~valodim/powerline/signalnames.png)

This hook replaces the return codes of applications by their associated signal
names. This way, you can see what signal killed an application, like INT from a
keyboad ^C, TSTP for ^Z and so on.


Parameters and Options
--

This prompt is configured using zstyles.

    zstyle ':prompt:powerline:ps1' sep1-char
    zstyle ':prompt:powerline:ps1' sep2-char
    zstyle ':prompt:powerline:ps1' lock-char
    zstyle ':prompt:powerline:ps1' branch-char

These styles allow specifying the powerline characters to be used in the
prompt. They default to '⮀', '⮁', '⭤' and '⭠' respectively. Note that these are
the OLD powerline characters, which were used in vim-powerline. The new
powerline uses a different set ('', '', '', ''). If you can see those but
not the old ones, you need to set the styles accordingly. Check out
example\_config.zsh.

    zstyle ':prompt:powerline:ps1' hide-user

If this style is true, the user will not be displayed. This is useful to hide
uninteresting usernames like a default one.

    zstyle ':prompt:powerline:ps1' host-color

This sets an explicit color to use for the hostname. If this is not set, a
color will be generated from the hostname.

    zstyle ':prompt:powerline:ps1' default-sh-level

This is the SHLVL value that will be assumed to be the top level. This should
be set so there is one arrow at the left side of the prompt for each process we
are below that top level.

    zstyle ':vcs_info:*:powerline:*' check-for-changes

This is a regular vcs\_info style, I mention it here because it is relevant. If
this style is true, the dirty working tree and staged changes indicators will
be shown inside repositories. This can be slow on big repositories, decide for
yourself if you find it worthwhile.

    zstyle ':prompt:powerline:ps1' precmd-hooks

This is an array of hooks which are called in the precmd function, after all
settings are loaded. This can be used in various ways, like adding segments or
modifying existing ones. For usage examples, check out the signal names and
disambiguate hooks.

