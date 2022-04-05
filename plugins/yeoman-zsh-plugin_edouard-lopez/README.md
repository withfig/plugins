# Yeoman plugin for (Oh My) ZSH

This is a [Yeoman](http://yeoman.io/) plugin for [Oh My ZSH](https://github.com/robbyrussell/oh-my-zsh), **compatible with _yeoman_ version `≥1.0`**. It provides:
* aliases ;
* **zsh autocomplete** functions and options.

`Note:` originally a fork of [@sayanee/yeoman-oh-my-zsh](sayanee/yeoman-oh-my-zsh) (for version `≤0.9.6`). It's has since been _fully redesigned_ to work with yeoman `≥v1.0`.

## Installation

### antigen

If you're using [Antigen](https://github.com/zsh-users/antigen):

1. Add `antigen bundle edouard-lopez/yeoman-zsh-plugin` to your `.zshrc` where you've listed your other plugins.

2. Restart your terminal application to **refresh context** and use the plugin. Alternatively, you can run `antigen bundle edouard-lopez/yeoman-zsh-plugin` in a running shell to have antigen load the new plugin.

### oh-my-zsh

If you're using [oh-my-zsh](github.com/robbyrussell/oh-my-zsh):

1. In the command line, change to _oh-my-zsh_'s custom plugin directory :

    ```
    cd ~/.oh-my-zsh/custom/plugins/
    ```
2. Clone the repository into a new `yeoman` directory:

    ```
    git clone https://github.com/edouard-lopez/yeoman-zsh-plugin.git yeoman
    ```
3. Edit your `~/.zshrc` and add `yeoman` – same as clone directory– to the list of plugins to enable:

    ```
    plugins=( ... yeoman )
    ```
4. Then, restart your terminal application to **refresh context** and use the plugin. Alternatively, you can source your current shell configuration:

    ```
    source ~/.zshrc
    ```

## Commands Completion

You can use `zsh` completion by typing `tab` after the three commands `yo`, `bower` and ~~`grunt`~~ to get some insight of the possibilities:

### `yo` completion

The list of generators is built using the native [`--generators` option](https://github.com/yeoman/yo#options)  

#### List installed generators

```bash
$ yo<tab>
angular                          -- angular's generator
gulp-webapp                      -- gulp-webapp's generator
karma                            -- karma's generator
leaflet                          -- leaflet's generator
mocha                            -- mocha's generator
webapp                           -- Default Yeoman generator for scaffolding out a front-end web app
```

#### List of options

```bash
$ yo -<tab><tab>
--help             -- show the help message and quit
--version          -- show version information and quit
  --help         # Print this info and generator's options and usage
  -f, --force    # Overwrite files that already exist
  --version      # Print version
  --no-color     # Disable colors
  --[no-]insight # Toggle anonymous tracking
  --generators   # Print available generators

```

### `bower` completion

#### List of subcommands :

```bash
$ bower<tab>
cache-clean        -- Cleans all the bower cache or the specified packages cache
completion         -- Tab Completion for bower
info               -- Version info and description of a particular package.
init               -- Creates a component.json file based on answers to questions
install            -- Installs a browser package locally into a components directory
link               -- The link functionality allows developers to easily test their packages. Linking is a two-step process.
list         ls    -- Lists all packages
lookup             -- Looks up a package url by name
register           -- Register a package.
search             -- Finds all packages or a specific package.
uninstall          -- Uninstalls a browser package locally from your components directory
update             -- Refreshes a package install
```

#### List of options are available both for top level and subcommands :

```bash
$ bower<tab>
--help             -- Show the help message and quit
--no-color         -- Do not print colors (available in all commands)
--version          -- Show version information and quit
```

#### Subcommand options:

```bash
$ bower list<tab><tab>
--help             -- Show the help message and quit
--map              -- Generates a deep dependency JSON source mapping
--no-color         -- Do not print colors (available in all commands)
--offline          -- Avoid checking for newer versions
--paths            -- Generates a simple JSON source mapping
--sources          -- Generates list of source files in order of dependency
--version          -- Show version information and quit
```

### `grunt` completion

    todo

## Aliases (for _yeoman_)

Old aliases have been updated to *use new yeoman's `≥1.0` commands*, i.e. `yo`, `bower`, `grunt` :

* `ym...` prefix stand for `yeoman`:

    ```
    alias ymget='npm install -g yo grunt-cli bower'

    alias ym='yo help'
    alias ymv='yo --version'

    alias ymi='yo'
    alias ymb='grunt build'
    alias ymsv='grunt server'
    alias ymsd='grunt server:dist'
    alias ymst='grunt server:test'
    alias ymt='grunt test'
    alias ymii='bower install'
    alias ymui='bower uninstall'
    alias ymu='bower update'
    alias yml='bower list'
    alias yms='bower search'
    alias ymlu='bower lookup'
    ```

## Aliases (for _grunt_ and _bower_)

**New aliases** have been added to be **more intituive** with yeoman version `≥1.0` commands (i.e. `yo`, `bower` and `grunt`). They respectively use the following prefixes:

### `g...` for `grunt` commands :

```bash
# new alias for Yoeman ≥1.0 (using 'grunt' and 'bower')
alias grb='grunt build'
alias grsv='grunt server'
alias grsd='grunt server:dist'
alias grst='grunt server:test'
alias grt='grunt test'
```

### `bw...` for `bower` commands.

```bash
alias bwii='bower install'
alias bwui='bower uninstall'
alias bwu='bower update'
alias bwl='bower list'
alias bws='bower search'
alias bwlu='bower lookup'
```

