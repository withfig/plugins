# Lando ZSH (lando-zsh)

This plugin adds aliases for using various languages and frameworks with [Lando](https://docs.lando.dev/basics/) for Docker. It will only run within lando-driven project directories.

To use it, add `lando` to the plugins array in your zshrc file:

```zsh
plugins=(... lando)
```

## ALIASES:

| Alias      | Description      |
|:----------:|:----------------:|
| `artisan`  | `lando artisan`  |
| `composer` | `lando composer` |
| `drush`    | `lando drush`    |
| `gulp`     | `lando gulp`     |
| `npm`      | `lando npm`      |
| `wp`       | `lando wp`       |
| `yarn`     | `lando yarn`     |

## How It Works:

This plugin removes the requirement to type `lando` before a command. It utilizes the lando version of supported commands run within directories with the following criteria:
- The `.lando.yml` file is found in the current directory or any parent directory within `$LANDO_ZSH_SITES_DIRECTORY`.
- The current directory is within `$LANDO_ZSH_SITES_DIRECTORY` but is not `$LANDO_ZSH_SITES_DIRECTORY` itself.

## Settings:

The plugin will utilize the default values. Set the variable(s) below as needed in your `.zshrc` file to change these default values to match your development environment. (E.G. Add `LANDO_ZSH_SITES_DIRECTORY=~/Projects` to `.zshrc`)

- `LANDO_ZSH_SITES_DIRECTORY`: The plugin will stop searching through parents for `LANDO_ZSH_CONFIG_FILE` once it hits this directory. This should be the top level directory that holds all of your projects.
- `LANDO_ZSH_CONFIG_FILE`: The plugin will check to see if this provided file exists to check for presence of Lando. By default, the lando config file is named `.lando.yml` but this can be changed if needed or desired.

## Author:

- Author: Joshua Bedford
- URL: [https://github.com/joshuabedford/lando-zsh](https://github.com/joshuabedford/lando-zsh)

Credit: A major thank you deserved to [Marc Cornellà](https://github.com/mcornella) for making this plugin far more efficient.

