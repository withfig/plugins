# Unified Tmux-ZSH-Vim Terminal Titles


Creates intelligent terminal titles in tmux, zsh, and vim, that work together
to give information about session, ssh host, path, and currently edited vim
buffer. Each part is modular and must be installed separately.

Note: the ZSH component of this is *heavily* influenced by
[jreese/zsh-titles](https://github.com/jreese/zsh-titles). The other components
are inspired by a variety of stack exchange answers.

## How it works

The three components of this plugin work together to make a useful
colon-separated title for any combination of tmux, zsh, and vim. For example, if
you are in a tmux session on your home computer with zsh at your home directory,
your title will be `t:0:~`, if your tmux session was named fred, it would be
`t:fred:~`. If you then opened `hi.txt` in vim or nvim, it would be
`t:fred:v:hi.txt`.

If by contrast, your did those same things over ssh on your remote machine
hubble, those would be: `t:hubble:0:~`, `t:hubble:fred:~`, `t:hubble:v:hi.txt`
instead. If you were the root user on hubble, the starting `t:` would instead be
`rt:`.

**Note:** A tmux terminal bell results in the title being prefixed with '!'
until an update event (doing something in vim, pressing return in zsh, waiting
for status-interval seconds (default 15)).

![tmux-zsh-vim-titles-demo](./unified-titles-demo.gif)

## Installation

### Tmux

Install with [tpm](https://github.com/tmux-plugins/tpm) by adding the following
line to your `.tmux.conf`:

```
set -g set-titles on
set -g @plugin 'MikeDacre/tmux-zsh-vim-titles'
```

You will then need to source your tmux config (`tmux source ~/.tmux.conf`) and
install the plugin by pressing your prefix key combo (defaults to Ctrl+b)
followed by `I` (shift+i). You can update by running your prefix followed by
`U`.

### ZSH

The easiest way to install this plugin with ZSH is to use
[Antigen](https://github.com/zsh-users/antigen) by adding the following line to
the apprpriate spot in your `~/.zshrc` file:

```
antigen bundle MikeDacre/tmux-zsh-vim-titles
```

You will then need to reload your zsh configuration (e.g. by starting a new
shell or sourcing your `~/.zshrc` to install the plugin. You can update by
running `antigen upgrade`.

Alternatively, if you use
[oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh), you can clone this into
your `oh-my-zsh` custom plugin directory:

1. `mkdir -p ${ZSH}/custom/plugins`
2. `cd ${ZSH}/custom/plugins`
3. `git clone https://github.com/MikeDacre/tmux-zsh-vim-titles.git`
4. Add `plugins+=(unified-titles)` to the right spot in your `~/.zshrc` and
   reloading zsh

To update you have to `cd` to the plugin directory and run `git pull`.

### Vim/NVIM

There are a great many plugin managers for vim/nvim right now, I personally use
[vim-plug](https://github.com/junegunn/vim-plug), to install with that manager,
just add the following line to the right spot in your `~/.vimrc` or
`~/nvim/init.vim`:

```
Plug 'MikeDacre/tmux-zsh-vim-titles'
```

You will then need to open a vim/nvim instance and run `PlugInstall` to install
the plugin. To update run `PlugUpdate`. The various other plugin managers work
similarly.

### Bash or another sh shell

If you also use a non-zsh shell, you can source the `bash-titles.plugin.sh` file
from your `~/.bashrc`. It doesn't do anywhere near as much as the ZSH version,
it simply sets the terminal title to the path, avoiding the otherwise long
titles that bash sometimes sets.

If anyone wants to port the zsh plugin to bash, that would be awesome. It should
be pretty easy, but I can't be bothered as I so rarely use bash.

## Configuration

The plugins will work right out of the box, but the formats can be configured
with a variety of shell variables. For example you could change the tmux prompt,
disable setting the window tab names, or change the delimiter from `:` to
something else.

All variables can be set in the shell, and are specified in the `defaults.sh`
config file. Vim variables may also be set in your vimrc, but must be set before
the plugin is loaded, not after. All variables start with `tzvt_`, plugin
specific variables are followed by the component name, e.g. `tzvt_vim_<option>`
or `tzvt_tmux_<option>`. Options that affect more that one component do not have
a component name, e.g. `tzvt_set_tmux_window_status` is used by every component.

I recommend that you create a `~/.tzvt_config` file to store all config
variables for the titles. You can create it by just duplicating the
`defaults.sh` file to that location and editing it. To set the location of this
config file, you can set the `$tzvt_config` shell variable and `@tzvt_config`
tmux variable to point to whatever config file you would like. This will just be
sourced prior to running the various components, so you could set it to a
`.bashrc` or `.zshrc` file if you wanted, but I don't recommend that. This file
is also not required, you can just set all variables in your `.zshrc` and
`.vimrc` if you prefer.

Note that in tmux, those config files will not be sourced. The tmux component
is written in bash and explicitly sources your `~/.bashrc` and `~/.profile` in
addition to the `$tzvt_config` and `defaults.sh` files.

Ideally, you should copy `defaults.sh` to that location and alter it to git your
preferences. To do that, do the following:

```shell
curl https://raw.githubusercontent.com/MikeDacre/tmux-zsh-vim-titles/master/defaults.sh >> ~/.tzvt_config
echo "source ~/.tmux/profile.sh >> ~/.zshrc"
echo "source ~/.tmux/profile.sh >> ~/.bashrc"
```

If you would like your config to be somewhere else (e.g., your existing
profile), add the following line to your `~/.tmux.conf`:

```
set -gq @tzvt_conf ~/.bash_profile
```

*Reminder*: for the tmux plugin only, the user's `~/.bashrc` and `~/.profile` are
also sourced, but it doesn't make sense to rely on this.

### Tmux window updating

By default, only the terminal title is set by all parts of this plugin, to also
set a mini version of the title in the status line window names, set
`$tzvt_set_tmux_window_status` to `true` in your config.

```shell
export $tzvt_set_tmux_window_status=true
```

### Tmux title configuration

Tmux is the first part of the title, the default title is `t:<session>:` on a
local machine, or `t:<session>:<hostname>` on a remote machine. The `t:` is
replaced with `rt` if you are root.

These variations are controlled by the following optional variables (dafaults
displayed):

- `tzvt_tmux_title_start='t:'`
- `tzvt_tmux_title_root='rt:'`
- `tzvt_tmux_title_format='#S:#T'`
- `tzvt_tmux_title_format_ssh='#h:#S:#T'`
- `tzvt_tmux_win_current_fmt='#I:#W#F'`
- `tzvt_tmux_win_other_fmt='#I:#W#F'`
- `tzvt_host_dict='{}'`

Note, after altering any of these settings, run `tmux source ~/.tmux.conf` to
implement the changes.

The format strings that start with a `#` are tmux specific and can be found in
the tmux man page. `#S` is the session name, `#I` is the window number, `#h` is
the short hostname, it is modified by `tzvt_host_dict`. This variable holds a
JSON dictionary as a string and has hostname replacements, e.g.
`'{"fraser-server": "lab"}'`. This will convert the hostname fraser-server to
lab to shorten the title. For example, add something like this to your
`~/.profile` file and source it from bash and zsh:

```shell
export tzvt_host_dict='{
    "fraser-server": "lab",
    "esmeralda": "esme",
    "fruster": "fr"
}'
```
If the hosts did not load after sourcing, try running the script directly:
`bash ~/.tmux/plugins/tmux-zsh-vim-titles/unified-titles.tmux`

`#T` is the terminal title and is set by the zsh and vim plugins, without it
those other plugins **will not display their titles**.

#### Status Window Renaming

Additionally, if `$tzvt_set_tmux_window_status` is set to true, the window status
tabs will also be updated to include the terminal title, by default the window
status is set to '#F#I:#W', equivalent to

```shell
tmux set-window-option -g window-status-current-format "#F#I:#W"
tmux set-window-option -g window-status-format "#F#I:#W"
```

To control these formats if `$tzvt_set_tmux_window_status` is true, update the
`$tzvt_tmux_win_current_fmt` and `$tzvt_tmux_win_other_fmt` config variables, don't set
the tmux window options directly, as they will be overwritten.

Note that the window-name will be also be automatically updated by ZSH and
Vim/NVIM (provided the plugin is also installed there), making the window status
title more useful. **Note though** that this will make `tmux rename-window` not
work if ZSH or Vim/NVIM are running, as they will continually change the window
title.

### ZSH title configuration

Without this plugin, the default ZSH title is just the hostname. This plugin
replaces this with the directory path or `command:path` if a command is running
in the terminal.

There are two variables to customize the ZSH portion of the title:

- `tzvt_zsh_title_fmt='${cmd}:${path}'`
- `tzvt_zsh_path_width=40`

`tzvt_zsh_title_fmt` controls the overall formatting of the title. Note the single
quotes, this is very important to prevent the variable from being expanded to
early, you must not use `"{cmd}:${path}"`, that will result in the string `:`
being passed to the plugin.

`tzvt_zsh_path_width` controls the maximum width of the path to the current directory in
the title, if the path is longer than this, only the last n characters of the
path will be shown. Note, this uses named paths, so HOME is replaced with `~`
and any hashed directories are replaced with their name, e.g. with
[cdbk](https://github.com/MikeDacre/cdbk).

If `tzvt_set_tmux_window_status` is true, then the window-name will be automatically
updated with a shortened version of the tzvt_zsh_title_fmt, where `tzvt_zsh_path_width` is
replaced by `tzvt_zsh_win_path_width`, which defaults to 25.

Note, ZSH tries to detect if the tmux plugin is installed. If in tmux, it checks
if the tmux plugin has been initialized. If not in tmux, it looks in the
`@tmux_plugins` directory for `tmux_zsh_vim_titles`. If you have a non-standard
plugin config, you probably should set `tzvt_tmux_plugin_installed=true`
manually.

### Vim/NVIM title configuration

For all other commands, the title will be `command:path`, but for vim or NVIM,
instead we use `v:<buffer>`, e.g. `v:README.md` or `v:[BUFEXPLORER]`. This title
is updated immediately on any buffer change, which makes it very useful.

If vim is not updating the titlebar correctly, try setting
`$tzvt_vim_force_tmux_title_change`. If this variable is set, the plugin will force
change the window title to the appropriate vim title and will issue shell title
instructions to try to force change the terminal title change. This works in
almost all cases, but there is a slight visual defect+overhead as the vim buffer
is redrawn on buffer change. For that reason it is off by default. If your vim
is not setting the title properly, try adding the following to the `@tzvt_conf`
config, or your `.bashrc`/`.zshrc`/a sourced profile file (only the environment
of the calling shell matters):

`export tzvt_vim_force_tmux_title_change=true`

Alternatively, for greater robustness, add `let g:tzvt_vim_force_tmux_title_change =
1` to your `~/.vimrc`.

The only format that can be changed for the vim title is the prefix, currently
set as `v:` to keep it out of the way:

- `$tzvt_vim_title_prefix="v:"` OR `let g:tzvt_vim_title_prefix = 'v:'`

Note, you can chose not to install the vim plugin, in which case either you will
end up with `vim:<path>` in the title, or another title produced internally by
vim, depending on your settings.

Finally, if you want to add the path to the terminal and window title also, you
can do so with `tzvt_tzvt_vim_include_path`, if this variable equates to `long`, the whole
path will be included, which can make your titles very large (unless you use ZSH
named dirs, see below), if it is just `true`, then any directories between you
and the file are included. To set, either edit the config file to include
`export tzvt_tzvt_vim_include_path='long'` or add the following line to your `~/.vimrc`:

```vim
let g:tzvt_tzvt_vim_include_path = 1 " OR 'long'/'zsh'
```

Otherwise the path follows the format elsewhere: `t:session:v:file.txt:~/code/`

To explicily disable the path (the default), set:

```vim
let g:tzvt_tzvt_vim_include_path = 0
```

To make the path go before the filename (more traditional), add this command to
your `~/.vimrc`:

```vim
let g:tzvt_vim_path_before = 1
```

### Long Paths on ZSH, Plus ZSH Named Directories

If you are using ZSH and Vim, the maximum length of the 'long' path will be set
at `path_width`, which defaults to *40* chars (this can be overriden just for
vim by adding `let g:tzvt_vim_pth_width = <len>` to your `~/.vimrc`, or for both vim
and ZSH by adding `export path_width=<len>` to your `~/.zshrc`.

Furthermore, if you use named directories (specified with `hash -d name=path`),
these will be included in the short path. These must be specified in a ZSH
config file, which is defined by `$ZSH_BOOKMARKS` and defaults to
`~/.zshbookmarks`. You can manage this file with the [cdbk
plugin](https://github.com/MikeDacre/cdbk).

To use ZSH paths when in ZSH or no paths at all other times, set
`g:tzvt_tzvt_vim_include_path` to `zsh`.

### Tmux Window Name Alteration

If `tzvt_set_tmux_window_status` is true, then the window-name will be automatically
changed also, and for the window running vim the current-window-status-format
will be updated to use the terminal title instead of window name, which allows
more vim sugar in the title. One side-effect of this is that if you have
multiple panes running with vim in some of them and non-ZSH shells (or ZSH
without this plugin installed) in the others, then the
current-window-status-format will not be updated on leaving vim, which could
give the other panes a long title.

