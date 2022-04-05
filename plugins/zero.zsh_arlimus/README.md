# zero's zsh

Consists of a theme and a plugin. They can be used independently. Both have to be activated explicitly.

## Requirments

* zsh
* [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh)

## Installation

Please run the installation of `oh-my-zsh` before installing zero.zsh. Afterwards run:

    curl https://raw.githubusercontent.com/arlimus/zero.zsh/master/bootstrap.sh | sh -

Alternatively:

    git clone https://github.com/arlimus/zero.zsh.git
    cd zero.zsh
    ./install.sh

Now enable it in your `~/.zshrc`:

    # set zero-dark or zero-light as the theme
    ZSH_THEME="zero-dark"

    # add zero to the list of plugins
    plugins=(git zero)

Reload your zsh and you are ready to go.


## Theme

* simple clean design
* support for git and hg repositories
* 256-color theme

Set theme to `zero-dark` if you have a dark terminal (white text on black background):

![Preview in themes/zero.zsh-theme.png](https://raw.github.com/arlimus/zero.zsh/master/themes/zero-dark.zsh-theme.png)

Set theme to `zero-light` if you have a light terminal (black text on white background):

![Preview in themes/zero-light.zsh-theme.png](https://raw.github.com/arlimus/zero.zsh/master/themes/zero-light.zsh-theme.png)

If you want to quickly change the theme, use the plugin (see below). This will provide shortcut commands for theming:

    dark_theme        # sets theme to zero-dark
    light_theme       # sets theme to zero-light

There are also theme-related commands:

    zsh_reload_theme             # quickly reload zsh
    zsh_load_theme "zero-dark"   # load a theme, eg this theme

References:

* prose theme + guide (see: http://stevelosh.com/blog/2010/02/my-extravagant-zsh-prompt/)
* the many preexisting themes (see: https://github.com/robbyrussell/oh-my-zsh/tree/master/themes)

### Configuration

If you want to further edit the theme, have a look at `zero-dark.zsh-theme` or `zero-light.zsh-theme` respectively. You can quickly see all important configuration options.

For example, if you don't like:

![before modification](https://raw.github.com/arlimus/zero.zsh/master/misc/mod-before.png)

and want:

![after modification](https://raw.github.com/arlimus/zero.zsh/master/misc/mod-after.png)

add this at the end of your `.zshrc`:

    export ZSH_THEME_PROMPT_CHAR_USER="∅"

## Plugin

Please see [plugins/zero/zero.plugin.zsh](zero.zsh/blob/master/plugins/zero/zero.plugin.zsh). All changes are well documented.

Short reference:


* quickly go to root folder of git repository

        cdgit

* ignorant ssh commands: ssh while ignoring host key checking. use these like you would use ssh, scp, and pssh. use with caution! (only recommended if you trust the network they reside in)

        sshi name@destination
        scpi file name@destination:
        psshi -l name -h hosts date

* grep all IPv4 and IPv6 addresses also works in global style via `,g_ip`, `,g_ip4`, `,g_ip6`

        grep_ip nmap_output.txt
        grep_ip4 nmap_output.txt
        grep_ip6 nmap_output.txt
        nmap 192.168.0.0/24 ,g_ip4

* if they are installed, use advcp utilities (coreutils' cp and mv with progress bar)

        cp -rv a /to/b                 # /usr/bin/acp -g  -rv a /to/b
        mv -v a /to/b                  # /usr/bin/amv -g  -v a /to/b

* simple shorthands

        l                              # ls
        l1                             # ls -1
        ll                             # ls -lha
        sl                             # ls
        ..                             # cd ../
        .....                          # cd ../../../../

* global aliases for `less`

        cat huge.txt ,l                # cat huge.txt  | less
        ./stdout+stderr.sh ,la         # ./stdout+stderr.sh 2>&1 | less"

* global aliases for `grep`

        cat my.html ,g "<h3" ,g "id="  # cat my.html  | grep  "<h3"  | grep  "id="
        cat all.log ,gv ignore_me      # cat all.log  | grep --invert-match  ignore_me
        cat ALLCAPS ,gi noncaps        # cat ALLCAPS  | grep --ignore-case  noncaps
        cat CAPS.log ,giv ignore       # cat CAPS.log  | grep --ignore-case --invert-match  ignore
        cat my.html ,go "href=[^ ]*"   # cat my.html  | grep --only  "href=[^ ]*"

* global aliases for `sort`

        ls -1 ,s                       # ls -1  | sort
        cat lines ,sr                  # cat lines  | sort --reverse
        du -hs * ,sh                   # du -hs *  | sort --human-numeric-sort
        du -hs * ,shr                  # du -hs *  | sort --human-numeric-sort --reverse

* global aliases for `wc` (counting)

        ls -1 ,count                   # ls -1  | wc --lines
        ls -1 ,cl                      # ls -1  | wc --lines
        cat essay.txt ,cw              # cat essay.txt  | wc --words
        cat my.bin ,cb                 # cat my.bin  | wc --bytes

* other global aliases

        ./run.daemon ,nul              # ./run.daemon > /dev/null 2>&1


## Issues / Suggestions

I'd love to hear your opinion! Feel free to add issues, or contributions, or drop me a line.

License: Apache v2

