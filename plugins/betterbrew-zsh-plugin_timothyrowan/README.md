# betterbrew-zsh-plugin - better command aliases for the macOS Homebrew Package Manager in zsh

`betterbrew-zsh-plugin` contains short aliases for all homebrew commands.

This is for my personal use and is always a work in progress. Feel free to hang with it.

## Example

Without typing full homebrew commands in console, like:
```console
$ brew install zsh --build-from-source
```

there is more convenient alias:
```console
$ bifs zsh
```

## Installation on oh-my-zsh

1. Go to `oh-my-zsh` plugins directory:

    ```console
    $ cd ~/.oh-my-zsh/plugins
    ```

2. Clone the repository into a new directory `betterbrew` :

    ```console
    git clone https://github.com/timothyrowan/betterbrew-zsh-plugin.git betterbrew
    ```

3. Enable `betterbrew` plugin by adding to your .zshrc configuration file:

    ```console
    plugins=(betterbrew)
    ```

4. Restart your shell.

## Aliases

| Alias                | Command                                                                                                                                 |
|:---------------------|:--------------------------------|
| binst                | brew install
| buinst               | brew uninstall
| bupd                 | brew update
| blst                 | brew list
| bsrch                | brew search
| banal                | brew analytics
| bcat                 | brew cat
| bclean               | brew cleanup
| bcom                 | brew command
| bcoms                | brew commands
| bcon                 | brew config
| bdeps                | brew deps
| bdesc                | brew desc
| bdiy                 | brew diy
| bdoc                 | brew doctor
| bfetch               | brew fetch
| bgist                | brew gist-logs
| bhome                | brew home
| binfo                | brew info
| bleaves              | brew leaves
| bln                  | brew ln
| blog                 | brew log
| bmig                 | brew migrate
| bmiss                | brew missing
| bopt                 | brew options
| bout                 | brew outdated
| bpin                 | brew pin
| bpinst               | brew postinstall
| bprune               | brew prune
| bread                | brew readall
| brinst               | brew reinstall
| bsh                  | brew sh
| bstyle               | brew style
| bswitch              | brew switch
| btap                 | brew tap
| btapinfo             | brew tap-info
| btappin              | brew tap-pin
| btapunpin            | brew tap-unpin
| bulink               | brew unlink
| bupack               | brew unpack
| bupin                | brew unpin
| butap                | brew untap
| bupdr                | brew update-reset
| bupgr                | brew upgrade
| buses                | brew uses
| bcache               | brew --cache
| bcell                | brew --cellar
| benv                 | brew --env
| bprefix              | brew --prefix
| brepo                | brew --repository
| bver                 | brew --version

