# autoupdate-antigen.zshplugin

Antigen doesn't do automatic updates like [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh). Set up easy
auto updating, both of antigen and the bundles loaded in your configuration.

Activate with `antigen bundle unixorn/autoupdate-antigen.zshplugin`

## Customization

set `ANTIGEN_PLUGIN_UPDATE_DAYS` before calling the bundle if you don't want
the default value of 7 days.

set `ANTIGEN_SYSTEM_UPDATE_DAYS` before calling the bundle if you don't want
the default value of 7 days.

These values must be integers.

