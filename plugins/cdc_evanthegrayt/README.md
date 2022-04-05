# $ cdc [dir]
> If your repositories are spread throughout your system like a pandemic, then
> `cdc` is the solution!

View on [GitHub](https://github.com/evanthegrayt/cdc) |
[GitHub Pages](https://evanthegrayt.github.io/cdc/)

## About
### Overview
I have a few directories in which I clone repositories. This function will
change directory to the passed argument, no matter which of the
repository-containing directories it's in. The plugin comes with tab-completion
for its arguments, as long as your `zsh`/`bash` version supports it. The plugin
also includes session history, and has options available that behave similar to
the `pushd`, `popd`, and `dirs` commands.

While this plugin was written for directories that contain repositories, you can
obviously use it for adding any directories to your `cd` path. In fact, this is
the default behavior, but you *can* force `cdc` to only recognize repositories
with a simple [configuration change](#only-recognize-actual-repositories).

### Rationale
I chose to make this function rather than editing `$CDPATH` because I don't like
changing the default behavior of `cd`, but you could just as easily do the
following:

```sh
# Assuming `repository` exists in `/path/to/repo_dir`
CDPATH=/path/to/repo_dir

cd repository # will cd to /path/to/repo_dir/repository
```

Alternatively, you could make aliases:

```sh
alias repository='cd /path/to/repo_dir/repository'
```

I don't like this method either, as it just pollutes your environment. In my
opinion, the less aliases, the better. Also, you now have to remember an alias
for each repository. `cdc` solves this issue with its tab-completion.

### Why the name "cdc"?
I wanted something fast to type that wasn't already a command or builtin. You
already type `cd` a million times a day, and you don't even have to move your
finger to hit the <kbd>c</kbd> key again. You can't get much faster.

## Installation
### oh-my-zsh
Clone the repository in your `$ZSH_CUSTOM/plugins` directory
```sh
git clone https://github.com/evanthegrayt/cdc.git $ZSH_CUSTOM/plugins/cdc
```
Then add the plugin to your `$HOME/.zshrc` file in the `plugins` array:
```sh
plugins=(cdc) # Obviously, leave your other plugins in the array.
```

### bash-it
Clone the repository in your `$BASH_IT_CUSTOM` directory
```sh
git clone https://github.com/evanthegrayt/cdc.git $BASH_IT_CUSTOM/cdc
```
Files in this directory that end with `.bash` are automatically sourced, so
there's nothing else to do.

### Vanilla zsh or bash
Clone the repository wherever you like, and source either the `cdc.plugin.zsh`
file for `zsh`, or `cdc.plugin.bash` file for `bash`, from one of your startup
files, such as `~/.zshrc` or `~/.bashrc`, respectively.

```sh
# Where $INSTALLATION_PATH is the path to where you installed the plugin.
source $INSTALLATION_PATH/cdc.plugin.zsh  # in ~/.zshrc
source $INSTALLATION_PATH/cdc.plugin.bash # in ~/.bashrc
```

If you're using a version of `zsh`/`bash` that doesn't support the completion
features, or you just don't want to use them, just source the `cdc.sh` file
directly.

```sh
source $INSTALLATION_PATH/cdc.sh # in either ~/.zshrc or ~/.bashrc
```

## Set-up
The following settings require variables to be set from a file called
`~/.cdcrc`. Note that the `~/.cdcrc` file is just a shell script that sets
values, so you can use `bash` conditionals if you'd like to use the same config
file on multiple systems. You can view an example of this in [my config
file](https://github.com/evanthegrayt/dotfiles/blob/master/dotfiles/cdcrc). Just
remember, these files get sourced into your interactive shell on startup, so
only use it to set the following values.

### Telling cdc where to look
To use this plugin, you need to set `CDC_DIRS` in `~/.cdcrc`. It should be an
array with absolute paths to the directories to search.

```sh
# Set this in ~/.cdcrc
CDC_DIRS=($HOME/dir_with_repos $HOME/workspace/another_dir_with_repos)
```

Note that the order of the elements in the array matters. The plugin will `cd`
to the first match it finds, so if you have the same repository -- or two
repositories with the same name -- in two places, the first location in the
array will take precedence. There is currently an issue to better handle this
"feature". Not sure how I want to go about it yet. Suggestions are very much
welcome [on the issue](https://github.com/evanthegrayt/cdc/issues/6).

### Ignoring certain directories
If you have directories within `CDC_DIRS` that you want the plugin to ignore,
you can set `CDC_IGNORE` to an array containing those directories. These
elements should only be the directory base-name, **not** the absolute path.
"Ignoring" a directory will prevent it from being "seen" by `cdc`.

```sh
# Assuming you never want to `cdc notes_directory`:
CDC_IGNORE=(notes_directory)
```

### Only recognize actual repositories
You can set `CDC_REPOS_ONLY` in `~/.cdcrc` to make `cdc` only recognize
repositories as directories. This is **disabled by default**. You can also set
an array of files and directories that mark what you consider a repository. Note
that markers that are directories must end with a `/`, while files must not.

```sh
# Enable "repos-only" mode. Note, the default is false.
CDC_REPOS_ONLY=true
# Set repository markers with the following. Note, the following is already the
# default, but this is how you can overwrite it in ~/.cdcrc.
CDC_REPO_MARKERS=(.git/ .git Rakefile Makefile .hg/ .bzr/ .svn/)
```
If you want to add markers to the existing array without overwriting it, you
can use `+=` when assigning it.

```sh
CDC_REPO_MARKERS+=(.example_directory_marker/ .example_file_marker)
```

Note that this setting can be overridden with the `-r` and `-R` options. See
[options](#options) below.

### Automatically pushing to the history stack
By default, every `cdc` call will push the directory onto the history stack. You
can disable this feature by setting `CDC_AUTO_PUSH` to `false` in your
`~/.cdcrc`.

```sh
# Disable auto-pushing to history stack.
CDC_AUTO_PUSH=false
```

You can then manually push directories onto the stack with `-u`. If you have
`CDC_AUTO_PUSH` set to `true`, you can still `cdc` to a directory and not push
it to the stack with the `-U` option. See [options](#options) below.

### Colored Output
You can enable/disable colored terminal output, and even change the colors, by
adding the following lines to your `~/.cdcrc`.

```sh
CDC_COLOR=false               # Default: true. Setting to false disables colors
# The following lines would make the colored output bold.
CDC_SUCCESS_COLOR='\033[1;92m'  # Bold green.   Default: '\033[0;32m' (green)
CDC_WARNING_COLOR='\033[1;93m'  # Bold yellow.  Default: '\033[0;33m' (yellow)
CDC_ERROR_COLOR='\033[1;91m'    # Bold red.     Default: '\033[0;31m' (red)
```

## Usage
Typing `cdc <TAB>` will list all available directories, and this list is built
on the fly; nothing is hard-coded. Hit `return` after typing the directory name
to change to that directory.

You *can* append subdirectories, and it will work; however, this is an
experimental feature, and I don't have tab-completion working for this yet (any
help with [the issue](https://github.com/evanthegrayt/cdc/issues/2) would be
greatly appreciated). For example:

```sh
cdc repo/bin
```

If the subdirectory doesn't exist, it will `cd` to the base directory, and then
print a message to `stderr`.

### Options
The plugin comes with a few available options. Some are for dealing with the
directory history stack, similar to `pushd`, `popd`, and `dirs`. Others are for
overriding variables set in `~/.cdcrc`. There's also a debug mode.

|Flag|What it does|
|:------|:-----------|
|-a|Allow the plugin to `cd` to ignored directories.|
|-c|Enable colored output.|
|-C|Disable colored output.|
|-l|List all directories to which you can `cdc`. Same as tab-completion.|
|-L|List the directories in which `cdc` will search.|
|-i|List the directories that are to be ignored.|
|-d|List directories in history stack. Similar to the `dirs` command.|
|-n|`cd` to the current directory in the history stack.|
|-t|Toggle to the last directory, similar to `cd -`. Rearranges history stack.|
|-p|`cd` to previous directory in history stack. Similar to the `popd` command.|
|-u|Push the directory onto the stack. Similar to the `pushd` command.|
|-U|Do not push the directory onto the stack.|
|-r|Only `cd` to repositories.|
|-R|`cd` to the directory even if it's not a repository.|
|-s|Re-source the config file (`~/.cdcrc`)|
|-D|Debug mode. Enables warnings for when things aren't working as expected.|
|-w|Print the directory location instead of changing to it. Like `which`.|
|-h|Print help.|

## Reporting bugs
If you have an idea or find a bug, please [create an
issue](https://github.com/evanthegrayt/cdc/issues/new). Just make sure the topic
doesn't already exist. Better yet, you can always submit a Pull Request.

If you have an issue with tab-completion, make sure you have completion enabled
for your shell
([bash](https://www.gnu.org/software/bash/manual/html_node/Programmable-Completion.html)
/ [zsh](http://zsh.sourceforge.net/Doc/Release/Completion-System.html)). If,
after reading the manual, you still have problems, feel free to submit an issue.

## Self-Promotion
I do these projects for fun, and I enjoy knowing that they're helpful to people.
Consider starring [the repository](https://github.com/evanthegrayt/cdc) if you
like it! If you love it, follow me [on github](https://github.com/evanthegrayt)!

