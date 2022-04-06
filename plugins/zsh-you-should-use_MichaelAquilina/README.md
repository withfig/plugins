> Simple zsh plugin that reminds you that you should use one of your existing aliases for a command you just typed.

Also supports detection of global and git aliases.

## Usage

You dont need to do anything. Once it's installed, `zsh-you-should-use`
will let you know if you wrote a command with an existing alias.

![](https://github.com/MichaelAquilina/zsh-you-should-use/raw/master/img/alias.png)

`you-should-use` also detects global aliases:

![](https://github.com/MichaelAquilina/zsh-you-should-use/raw/master/img/global.png)

and Git aliases:

![](https://github.com/MichaelAquilina/zsh-you-should-use/raw/master/img/git.png)

## Requirements

`you-should-use` officially supports zsh versions 5.1 onwards.

It is possible the plugin might work on even older versions. However
they would not have been tested as part of the CI test process.

## Message Position

By default, `you-should-use` will display its reminder message *before*
a command has executed. However, you can choose to display the mesasge
*after* a command has executed by setting the value of
`YSU_MESSAGE_POSITION`.

    export YSU_MESSAGE_POSITION="after"

## Displaying Results

By default, `you-should-use` will display the best match from any
matching aliases found. However, you can change this behaviour so that
it displays *all* matches found by setting the value of `YSU_MODE`.

-   To only display best match (default): `export YSU_MODE=BESTMATCH`
-   To display all matches: `export YSU_MODE=ALL`

## Customising Messages

By default, the following message is displayed in bold when an alias is
found:

    Found existing %alias_type for "%command". You should use: "%alias"

Where the following variables represent:

-   `%alias_type` - the type of alias detected (alias, git alias, global
    alias)
-   `%command` - the command that was typed by the user
-   `%alias` - the matching alias that was found

This default message can be customised by setting the
`YSU_MESSAGE_FORMAT` environment variable.

If for example, you wish to display your own custom message in red, you
can add the following to your `~/.zshrc`:

    export YSU_MESSAGE_FORMAT="$(tput setaf 1)Hey! I found this %alias_type for %command: %alias$(tput sgr0)"

`$(tput setaf 1)` generates the escape code terminals use for red
foreground text. `$(tput sgr0)` sets the text back to a normal color.

You can read more about how you can use tput and terminal escape codes
here: <http://wiki.bash-hackers.org/scripting/terminalcodes>

Hardcore Mode
-------------

**For the brave and adventerous only** :godmode:

You can enable Hardcore mode to enforce the use of aliases. Enabling
this will cause zsh to refuse to execute commands you have entered if an
alternative alias for it exists. This is a handy way of forcing you to
use your aliases and help you turn those aliases into muscle memory.

Enable hardcore mode by setting the variable `YSU_HARDCORE` to 1.

    export YSU_HARDCORE=1

Now if you type a command that has an alias defined and you didnt use
it, zsh will refuse to execute that command:

    $ export YSU_HARDCORE=1
    $ ls -lh
    Found existing alias for "ls -lh". You should use: "ll"
    You Should Use hardcore mode enabled. Use your aliases!
    $ ll
    total 8.0K
    -rw-r--r-- 1 michael users 2.4K Jun 19 20:46 README.md
    -rw-r--r-- 1 michael users  650 Jun 19 20:42 you-should-use.plugin.zsh

Check your Alias usage
----------------------

It\'s often useful to check how often we use our aliases so that we have
an idea of which ones we could probably get rid of (or remind ourselves
of them if we forgot). `zsh-you-should-use` provides a convenience
function `check_alias_usage` which you can run to analyse your alias
usage.

    $ check_alias_usage
    924: curl='curl --silent'
    652: gco='git checkout'
    199: json='jq '.' -C'
    157: less='less -R'
    100: ll='ls -lh --group-directories-first'
    93: vim='nvim'
    76: watch='watch '
    61: v='vim'
    60: md='mkdir'
    39: gr='git rebase'
    38: dc='docker-compose'
    35: ls='ls --color=auto'
    33: h='history'
    28: dcr='docker-compose

`check_alias_usage` analyses your history to generate this data for you.
If your history is disabled or if you limit your history to a certain
amount of time, then the alias report generated will be a reflection of
the limited data available.

Optionally, you can limit how far `check_alias_usage` looks back in
history by providing an optional numeric parameter. This parameter
specifies how many entries in the history to check when generating the
report. In the example below, history is limited to the last 200 entries
when generating the alias report.

    $ check_alias_usage 200
    9: h='history'
    3: gpoh='git push -u origin HEAD'
    3: gco='git checkout'
    2: v='vim'
    2: ll='ls -lh --group-directories-first'
    2: gpohw='gpoh && git web --pull-request'
    2: gc='git commit'
    2: gap='git add -p'
    2: ap='ansible-playbook'
    1: xopen='GDK_BACKEND=wayland xdg-open'
    1: t='tig'
    1: gw='git web'
    1: gs='git status'

Disable Hints for specific Aliases
----------------------------------

You can tell `you-should-use` to permanently ignore certain aliases by
including them in the `YSU_IGNORED_ALIASES` variable (which is an
array):

    $ ls -l
    Found existing alias for "ls -l". You should use: "ll"

    $ export YSU_IGNORED_ALIASES=("g" "ll")
    $ ls -l

If you want to ignore global aliases, use the
`YSU_IGNORED_GLOBAL_ALIASES` environment variable.

    $ cd ../..
    Found existing global alias for "../..". You should use: "..."

    $ export YSU_IGNORED_GLOBAL_ALIASES=("...")
    $ cd ../..

Temporarily Disabling Messages
------------------------------

You can temporarily disable you should use by running the command
`disable_you_should_use`.

When you want to re-enable messages, run the command
`enable_you_should_use`.

Contributing
------------

Pull requests and Feedback are welcome! :tada:

I have tried to cater for as many use cases that I can think of.
However, they are naturally tailored to to my own workflow and I could
be missing many others.

Because of this if there is a specific use case that does not work as
you would expect or if you have any suggestions to how the plugin should
behave, feel free to [open an
issue](https://github.com/MichaelAquilina/zsh-you-should-use/issues/new)
