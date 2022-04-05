# fzf-z

**Note**: Personally I am no longer using this plugin actively, so I have archived it.
If you're interested in taking it over, please let me know.

---

This plugin was originally inspired as a mashup between
[fzf](https://github.com/junegunn/fzf), and oh-my-zsh's [z
plugin](https://github.com/robbyrussell/oh-my-zsh/tree/master/plugins/z),
which allows you to track recently and commonly used directories. The *z*
plugin does a great job of allowing you to switch between frequently-used
directories just by typing `z *somedirectorysubstring*`, but it doesn't really
easily allow you to browse those directories, with partial-string search. This
plugin was invented to solve that problem, using `fzf` as a front-end. Since
then, it's been extended to support [fasd](https://github.com/clvv/fasd) and
[autojump](https://github.com/wting/autojump), other 'frecency' plugins, as
alternatives to `z`.

## Installation

You can install `fzf-z` like any other `zsh` plugin. If you're not familiar
with `zsh` plugins, using a plugin manager is the easiest way to install one.
You can find information on some popular choices
[here](https://wiki.archlinux.org/index.php/Zsh#Plugin_managers). `oh-my-zsh`
and other configuration frameworks do not by themselves allow you to add custom
plugins such as `fzf-z`; you'll likely need a plugin manager in addition.

### Pre-requisites

You must have one of these installed:

* The [z
plugin](https://github.com/robbyrussell/oh-my-zsh/tree/master/plugins/z).

* The [fasd](https://github.com/clvv/fasd) tool (my personal choice, and recommended
if you are not already using one of these tools).

* The [autojump](https://github.com/wting/autojump) tool.

These tools must be in your `$PATH`. These have to be installed irrespective
of how you use `fzf-z`.

You must also have [fzf](https://github.com/junegunn/fzf) installed. You can
set the full path to `fzf` binary with environment variable `FZF_BIN_PATH`, or
it uses the one found in your `$PATH`.

*Note*: When you first use `fzf-z`, if you have configured
`FZFZ_RECENT_DIRS_TOOL` to use `z` (which is the default), it will dynamically
download `z.sh` for its own internal use. You still need to have the [z
plugin](https://github.com/robbyrussell/oh-my-zsh/tree/master/plugins/z)
installed anyway.

## Sources of information

Since the original version, I've extended `fzf-z` to support other sources of
information about the directories you might be interested in, which are all
mixed into the same list delivered through `fzf`. In priority order (the order
in which they are shown in `fzf`, first to last):

1. Directories *under* the current directory. The number of these shown in
   `fzf` is limited by the `FZFZ_SUBDIR_LIMIT` environment variable, which
   defaults to 50. If you don't want those to be shown, simply set this to
   `0`.

1. Recently used dirs. By default, these are provided by the `z` command from
   the z plugin (the original purpose of this plugin). The order shown is the
   order given by `z -l`. However, if you want to use `fasd` (preferred) or
   `autojump` instead, set `FZFZ_RECENT_DIRS_TOOL` to `fasd` or `autojump`
   respectively.

1. All subdirectories in all directories listed in the `FZFZ_EXTRA_DIRS`
   environment variables. These directories are space-separated, so for
   example:

   `export FZFZ_EXTRA_DIRS="~/MyDocuments '~/Desktop/Some Other Stuff'"`

## Ways to use fzf-z

### As a zsh plugin

Treat this plugin like any other zsh plugin and install using a [zsh plugin
manager](https://github.com/unixorn/awesome-zsh-plugins#frameworks). For
example:

Once the plugin is installed, simply hit `<CTRL-g>` on the zsh command-line,
and it will bring up a list of directories according to the sources of
information listed above. Select one, perhaps typing to filter the list, and
hit Enter - the path to the selected directory will be inserted into the
command line.  If you started with an empty command line, and you have the
`AUTO_CD` zsh option turned on you'll change to that directory instantly.

This is similar to the default **Ctrl-T** binding already provided by the
[fzf zsh key-bindings
file](https://github.com/junegunn/fzf/blob/master/shell/key-bindings.zsh). At
the moment, this plugin doesn't allow the **Ctrl-G** keybinding to be
customized, but you can change by simply forking the plugin and editing the
file if you want.

### As a command

*New*: this plugin repository also now includes `fzfz` as a standalone command
(although it depends on the provided script `recentdirs.sh` also). You can run this
as an alternative to using this as a plugin, and it will print the selected
directory to stdout, which you can use to embed this in other tools.

## Customizing and Options

If you set the `FZFZ_EXCLUDE_PATTERN` environment variable to a regex (matched
with `egrep`) it will exclude any directory which matches it from appearing in
the subdirectory results (it isn't applied to the `z`/`fasd`/`autojump`
results, since it's assumed any directory you've navigated to before is one
you might be interested in). By default this variable is set to filter out
anything in a `.git` directory.

You can also set `FZFZ_EXTRA_OPTS` to add any additional options you like to
the `fzf` command - for example, `-e` will turn exact matching on by default.

By default, fzf-z will filter out duplicates in its list so directories found
via multiple methods don't appear twice; however, this does slow it down. If
you don't care about that and want to speed it up, set
`FZFZ_UNIQUIFIER="cat"`.

If you want to change the preview command used by fzfz (currently `tree` by
default if it's installed, or `ls` if not), set `FZFZ_PREVIEW_COMMAND` to
something like `ls {}` (`{}` is replaced with the directory currently
selected).

## Performance

If it's installed and in your `PATH`, `fzf-z` will use
[fd](https://github.com/sharkdp/fd). If not, it'll fall back to `find`, which
is slower. The behaviour is slightly differently also; `fd` will exclude files
ignored by `.gitignore` or similar, which `find` will not do, so you will get
less results. Generally, this is what you want, though.

