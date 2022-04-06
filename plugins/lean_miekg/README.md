# About

After having used [prompt pure](https://github.com/sindresorhus/pure) for about a year, I felt that
a two-line prompt was not for me. Also not utilizing the right side of the terminal seemed a missed
opportunity. Still there is much to like: the elapsed time of a process, the coloring of the prompt
if the exit code of the process isn't 0, git integration. So I took "pure", mixed in my ideas of
what a prompt should look like and came up with "lean" - a 1 line prompt that stays out of your
face.

When lean starts, only 2 characters show on the screen '%' on the left and '~' on the right.

![lean example gif](https://github.com/miekg/lean/blob/master/lean.gif "Example Session Using Lean")

So lean is an evolution of pure, with the following changes:

*   Defaults to a very sparse setup, only showing information you need at the moment.
*   Comes with the perfect prompt character. Author went through the entire ASCII range to find it
    (and found it pretty quickly!)
*   Never displays your username (assuming you know who you are).
*   When tmux is active it shows a yellow 't' (I disabled the tmux bar, so this is some visual
    indication that tmux is active). If you don't want this indicator, you can always set
    `PROMPT_LEAN_TMUX=""` prior to loading this plugin (or prior to sourcing `zgen`, etc.).
*   Show remote host if logged in through SSH.
*   All in one line, most stuff in the right prompt, leaving the left prompt nice and clean
*   Shows background jobs (in the left prompt)
*   Show (dirty) git repos (can be disabled by setting `PROMPT_LEAN_VCS` to `0`)
*   Shortens path if needed (longer then 70% of your screen). Two methods are provided: 'truncate'
    and 'shrink' (fish-style working directory). Set `PROMPT_LEAN_ABBR_METHOD` to choose the one you
    like the most (default is 'truncate'). Set `PROMPT_LEAN_PWD` to `0` to disable showing the path
    altogether.
*   Uses `PROMPT_LEAN_LEFT` and `PROMPT_LEAN_RIGHT` to allow customization of the left and/or right
    side of the prompt.
*   For a configurable insertmode indicator, set the `PROMPT_LEAN_VIMODE` and
    `PROMPT_LEAN_VIMODE_FORMAT` variables. `PROMPT_LEAN_VIMODE_FORMAT` defaults to
    `"%F{red}[NORMAL]%f"`
*   Configurable colors to match your preferred scheme, by setting `PROMPT_LEAN_COLOR1` and
    `PROMPT_LEAN_COLOR2`
*   Use `PROMPT_LEAN_NOTITLE` to customize when the title should not be displayed. Useful for
    terminals that can not show title properly.
*   Use `PROMPT_LEAN_VCS` and `PROMPT_LEAN_PWD` to disable showing VCS info or the current working
    directory.

# Installation

## zgen

If you use [zgen](https://github.com/tarjoilija/zgen) you can add the following to your `~/.zshrc`:

~~~
zgen load miekg/lean
~~~

and force reload with `zgen reset && source ~/.zshrc`.

Note you must have the option PROMPT_SUBST set, see zshoptions(1).

## prezto

If you use [prezto](https://github.com/sorin-ionescu/prezto) you should do the following:

~~~
cd $ZPREZTODIR && git clone --recurse-submodules https://github.com/belak/prezto-contrib contrib
~~~

Then in `~/.zpreztorc` add `contrib-prompt` to module load list and select `lean` as a theme:

~~~
zstyle ':prezto:load' pmodule \
  ... \
  'contrib-prompt' \
  'prompt' \
  ...

zstyle ':prezto:module:prompt' theme 'lean'
~~~

`PROMPT_LEAN_LEFT` and `PROMPT_LEAN_RIGHT` should be customized in `~/.zshrc`. The rest variables
should be customized in `~/.zshenv`.

# Development

If you make any changes please run `make test` to ensure the (little) test suite is succesfull.

