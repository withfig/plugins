# zsh-opt-path

Automatically add paths in `~/opt/` to your `$PATH`.

This will search your `~/opt/` directory for subpaths, or subpaths containing
a `bin` directory, and add these directories to your `$PATH` if they are not
already listed.

For example, if you have multiple projects built in separate prefixes of
`~/opt/`, this will find them and add them to `$PATH` without needing to be
explicitly listed in your `.zshrc`:

    $ echo $PATH
    /home/user/opt/znc/bin:/home/user/opt/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin

## copyright

zsh-opt-path is copyright 2015 John Reese and licensed under the MIT license.

