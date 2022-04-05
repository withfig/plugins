# Hab

> While on Mars, the crew will be living in an artificial habitat, or _Hab_ for
> short.

`Hab` is an [Oh My ZSH](https://ohmyz.sh/) plugin that loads/unloads OS
enviroment variables and functions automatically when:

- Changing directories
- After editing `.envrc` files.
- Opening new shells.

## Small example

Given the following `.envrc` file in the folder `my_project`:

```bash
# file: /home/user/my_project/.envrc
export HOSTNAME="https://my.hab"

function clean_build() {
  rm -rf "$(pwd)/_build" 2> /dev/null
  echo "All cleaned!"
}
```

Then:

1. Loads it when `cd`ing into `my_project`:
   ```bash
   ~ $ cd my_project
   [SUCCESS]  Loaded hab [/home/user/my_project/.envrc]

   ~/my_project $ echo "$HOSTNAME"
   https://my.hab

   ~/my_project $ clean_build
   All cleaned!
   ```

2. Unloads it when `cd`ing out of `my_project`

   ```bash
   ~/my_project $ cd ..
   [WARN]  Unloaded variable HOSTNAME
   [WARN]  Unloaded function clean_build
   ```

## Hab Autoload

The environment will be (re)loaded automatically every time:

- We change directory and there's a `.envrc` file available.
- We edit the `.envrc` while its environment was already loaded.
- We open a new shell in a directory with an `.envrc` file present.

## Different Habs

Though `Hab` it's going to autoload `.envrc` automatically every time you change
directories, you can manually load special environments e.g:

Given the folliwing environment files:

```bash
~/my_project $ ls -a
.
..
.envrc
.envrc.test
.envrc.dev
.envrc.prod
```

We could load any of them by using its extension (no extension to use the
default one) e.g:

```bash
~/my_project $ hab dev
[WARN]     Unloaded variable HOSTNAME
[WARN]     Unloaded function clean_build
[SUCCESS]  Loaded hab [/home/user/my_project/.envrc.dev] (Last modified Wed 04 Mar 2020 03:42:52 PM CET)
```

## `Hab` sub-commands

Though we could never run a command as everything is done automatically, there
are some useful sub-commands for handling things manually as well:

- Loading environments:

   ```bash
   ~/my_project $ hab           # Loads .envrc
   ~/my_project $ hab dev       # Loads .envrc.dev
   ~/my_project $ hab load      # Loads .envrc
   ~/my_project $ hab load dev  # Loads .envrc.dev
   ```

- Reloading environments:

   ```bash
   ~/my_project $ hab reload    # Reloads current environment
   ```

- Unloading environments:

   ```bash
   ~/my_project $ hab unload    # Unloads current environment
   ```

- Updating `Hab`:

   ```bash
   ~ $ hab update
   ```

> **Note**: `hab` command supports ZSH auto-completions.

## Environment file

The environment file (defaults to `.envrc`) accepts a zsh subset:

- Hab can only load and unload `export`s and `function`s e.g:

   ```bash
   export MY_VARIABLE=42

   function hello() {
      echo "Hello!"
   }
   ```

- Hab ignores comments and empty lines.

Additionally, if the comment `# INHERIT: true` is found in the file, every
sub-directory will inherit the environment file (unless there's a file that
overrides it) e.g. the following file will affect any folder inside
`~/my_project`:

```bash
# file: ~/my_project/.envrc

# INHERIT: true
export MY_VARIABLE=42
```

> **Important**: In order for inheritance to work, you need to load the root
> environment first. If you `cd` directly into a sub-folder without loading the
> root folder's environment, it won't load the environment.

The default environment file name can be customized globally by changing the
value of the variable `$HAB_BASE` in your `.zshrc` file e.g:

```bash
export HAB_BASE=".env"
```

## Installation

Just clone `Hab` as follows:

```bash
~ $ git clone "https://github.com/alexdesousa/hab.git" "$ZSH_CUSTOM/plugins/hab"
```

And add the hab to your `plugins` in `$HOME/.zshrc` file:

```bash
autoload -U +X compinit && compinit
autoload -U +X bashcompinit && bashcompinit
autoload -U add-zsh-hook

plugins=(
  hab
)
```

> **Note**: The `autoload`s are necessary for auto-completions and hook
> installation.

## Author

Alexander de Sousa.

## License

`Hab` is released under the MIT License. See the LICENSE file for further
details.

