zoppo - the crippled configuration framework for Zsh
====================================================
*zoppo* is a configuration framework for [Zsh][1]; it enriches the command line
interface environment with sane defaults, aliases, functions, auto completion,
and prompt themes.

As an italian saying goes: "chi va con lo zoppo, impara a zoppicare", we
realized we were walking with a cripple and are now going to become crippled
ourselves.

Installation
------------
*zoppo* will work with any recent release of Zsh, but the minimum recommended
version is 4.3.10.

### The super dooper automatic way

    wget -O- https://raw.github.com/zoppo/zoppo/master/bin/installer.zsh | zsh -s -- -y

### The easy but full of questions way

    wget -O- https://raw.github.com/zoppo/zoppo/master/bin/installer.zsh | zsh -s

### The paranoid way

  1. Launch Zsh:

        zsh

  2. Clone the repository:

        git clone --branch default --recursive git://github.com/zoppo/zoppo.git "${ZDOTDIR:-$HOME}/.zoppo"

  3. Create a new Zsh configuration by copying the Zsh configuration files
     provided:

        setopt EXTENDED_GLOB
        for rcfile in "${ZDOTDIR:-$HOME}"/.zoppo/templates/^README.md(.N); do
          cp "$rcfile" "${ZDOTDIR:-$HOME}/.${rcfile:t}"
        done

  4. Set Zsh as your default shell:

        chsh -s /bin/zsh

  5. Restart Zsh

        exec zsh

### Mac OS X

If you have administrator privileges, you must fix an Apple-introduced problem
in Mac OS X 10.5 Leopard by executing the following command, or BASH and Zsh
will have the wrong `PATH` when executed non-interactively.

    sudo chmod ugo-x /usr/libexec/path_helper

`path_helper` is intended to make it easier for installers to add new paths to
the environment without having to edit shell configuration files by adding
a file with a path to the `/etc/paths.d` directory.

Unfortunately, `path_helper` always reads paths from `/etc/paths` set by Apple
then paths from `/etc/paths.d` set by third party installers, and lastly paths
from the `PATH` environment variable set by the parent process, which
ultimately is set by the user with `export PATH=...` Thus, it reorders path
priorities, and user `/bin` directories meant to override system `/bin`
directories end up at the tail of the array.

### Troubleshooting

If you are not able to find certain commands after switching to *zoppo*,
modify the `PATH` variable in `~/.zshenv` then run `zoppo:restart`.

Usage
-----
*zoppo* has many features disabled by default. Read the source code and
accompanying README files to learn of what is available.

### Plugins

  1. Browse `/plugins` to see what is available.
  2. Load the plugins you need in `~/.zopporc` then run `zoppo:restart`.

### Prompts

  1. For a list of prompts, type `prompt -l`.
  2. To preview a prompt, type `prompt -p name`.
  3. Load the theme you like in `~/.zopporc` then run `zoppo:restart`.

Customization
-------------
The project is managed via [Git][3]. It is highly recommend that you commit
your changes and push them to [GitHub][4] to not lose them. If you do not know
how to use Git, follow this [tutorial][5] and bookmark this [reference][6].

If you make changes to the core and think they could be useful for others don't
hesistate to open [an issue or a pull request][20] showing off the thing. It
will be discussed unless clearly useful and pertinent to belonging to the core.

The same reasoning can be applied to existing plugins, don't hesitate to open
[an issue or pull request][21]. That applies to prompts too, just open [an
issue or pull request][22].

If you want to write plugins for your personal use, it's suggested that you
create your own plugins directory and add it to the plugins path, it will be
automatically used so you don't have to fiddle with git.

To add it just put in the `~/.zopporc`:

    zdefault +a ':zoppo:path' plugins '/your/plugins/path'

If you want to write your own prompt and don't want to have it merged upstream, you
can do the same with prompts, just add your prompts path to the path:

     zdefault +a ':zoppo:path' prompts '/your/prompts/path'

Resources
---------
The [Zsh Reference Card][7] and the [zsh-lovers][8] man page are indispensable.

License
-------
Everything is under WTFPL unless otherwise noted.

[1]: http://www.zsh.org
[3]: http://git-scm.com
[4]: https://github.com
[5]: http://gitimmersion.com
[6]: http://gitref.org
[7]: http://www.bash2zsh.com/zsh_refcard/refcard.pdf
[8]: http://grml.org/zsh/zsh-lovers.html
[20]: https://github.com/zoppo/zoppo/issues
[21]: https://github.com/zoppo/plugins/issues
[22]: https://github.com/zoppo/prompts/issues

