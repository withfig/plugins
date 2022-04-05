# fzf-gcloud

## Summary
`fzf-gcloud` is a [`zsh`](https://en.wikipedia.org/wiki/Z_shell) script lets you browse the [`gcloud`](https://cloud.google.com/sdk/gcloud/) CLI api with [`fzf`](https://github.com/junegunn/fzf).

It adds a keybinding on `CTRL-K` (like *cloud* ... meh) to browse the currently installed `gcloud` CLI API with `fzf`, to help navigate the many commands quickly:
![Usage preview](usage_preview.gif)

## Requirements
- `fzf` (Please see the instructions [upstream for fzf](https://github.com/junegunn/fzf), but generally: `brew install fzf` & `$(brew --prefix)/opt/fzf/install`)
- `gcloud` (`brew install --cask google-cloud-sdk`)
- `sqlite3` (`brew install sqlite`)

## Installation

### Manual Installation
1. Download the shell functions from this repo:
```zsh
curl https://raw.githubusercontent.com/mbhynes/fzf-gcloud/main/fzf-gcloud.plugin.zsh > $HOME/.fzf-gcloud.plugin.zsh
```
2. Add the following lines in your `~/.zshrc` to source the functions to source them:
```zsh
[ -f ~/.fzf-gcloud.plugin.zsh ] && source ~/.fzf-gcloud.plugin.zsh
```
### Antigen
Please note that the branch to checkout is `main`, which must be specified in the `antigen` invocation (see [antigen bundle](https://github.com/zsh-users/antigen/wiki/Commands#antigen-bundle) for more details):
```
antigen bundle 'mbhynes/fzf-gcloud' --branch=main
```
The first time you use `CTRL-K`, the `gcloud` command cache will be populated. 

Don't panic. 

You will be greeted by a wall of logging messages like those below for about a minute, after which you may use `fzf-gcloud` without having to repopulate the cache.
```
Adding invocation for 'gcloud beta sql import bak' (build from /usr/local/Caskroom/google-cloud-sdk/latest/google-cloud-sdk/lib/surface/sql/import/bak.py)
Adding invocation for 'gcloud beta sql import csv' (build from /usr/local/Caskroom/google-cloud-sdk/latest/google-cloud-sdk/lib/surface/sql/import/csv.py)
Adding invocation for 'gcloud beta sql import sql' (build from /usr/local/Caskroom/google-cloud-sdk/latest/google-cloud-sdk/lib/surface/sql/import/sql.py)
Adding invocation for 'gcloud beta sql backups delete' (build from /usr/local/Caskroom/google-cloud-sdk/latest/google-cloud-sdk/lib/surface/sql/backups/delete.py)
Adding invocation for 'gcloud beta sql backups describe' (build from /usr/local/Caskroom/google-cloud-sdk/latest/google-cloud-sdk/lib/surface/sql/backups/describe.py)
```

### Other Packge Manager Installation
Please note that since there is no `master` branch for this repository (we use `main`), the some default load commands for popular zsh package managers will fail. Antigen supports providing an optional branch to `antigen bundle` and has good documentation, so it's the recommended package manager for installing `fzf-gcloud`.

Something like the below may work? ... YMMV.
```zsh
zgen load 'mbhynes/fzf-gcloud' 'main'
```

### Usage
- The widget is by default bound to the keybinding `CTRL-K` (`'^K'`)
- You can alter this by changing the `bindkey` line in the `.fzf-gcloud.plugin.zsh` or `~/.antigen/bundles/mbhynes/fzf-gcloud-main/fzf-gcloud.plugin.zsh` (or wherever you've placed it in your system), as noted below:

```zsh
fzf-gcloud-widget() {
  # ==========================================================================
  # Bind the gcloud fzf helper to CTRL-K
  # ==========================================================================
  LBUFFER="$(__gcloud_sel)"
  local ret=$?
  zle reset-prompt
  return $ret
}
zle     -N   fzf-gcloud-widget
bindkey '^K' fzf-gcloud-widget # <--- change if you prefer a different keybinding
```

## Implementation Details

### Implementation Summary
The `fzf-gcloud` completion mechanism works in the following way:
- we create a local cache (`sqlite` database) of `gcloud` commands for use with `fzf`
- when the keybinding is invoked, the commands in this cache are piped into `fzf` with a `--preview` option to display each command's `--help` docs

### Caching the `gcloud` signature
The local `sqlite` database is populated is a notably not-fancy way:
- we determine the `google-cloud-sdk` root directory from the `gcloud` path (for `brew` users this will be: `"$(brew --prefix)/Caskroom/google-cloud-sdk/latest/google-cloud-sdk`
- the signature of each `gcloud` command is inferred from the python filenames and directory structure in the `lib/surface` of the `google-cloud-sdk`
- we detect whether the `alpha` or `beta` release track flags are required in each file, and use this to update the `gcloud` invocation, as appropriate
- the cache is saved to `"$HOME/.gcloud_cmd_cache.db"`, which database contains only 1 simple table with schema:
```sql
    create table GCLOUD_CMD_CACHE(
      api_source_file         text
    , gcloud_cmd_invocation   text
    );
```
- If you're interested, you may browse/update the contents of this cache:
```bash
sqlite3 $HOME/.gcloud_cmd_cache.db "select * from gcloud_cmd_cache where gcloud_cmd_invocation like '%alpha%' order by api_source_file limit 5;"
```
```
/usr/local/Caskroom/google-cloud-sdk/latest/google-cloud-sdk/lib/surface/access_approval/__init__.py|gcloud alpha access-approval
/usr/local/Caskroom/google-cloud-sdk/latest/google-cloud-sdk/lib/surface/access_context_manager/cloud_bindings/__init__.py|gcloud alpha access-context-manager cloud-bindings
/usr/local/Caskroom/google-cloud-sdk/latest/google-cloud-sdk/lib/surface/access_context_manager/cloud_bindings/create.py|gcloud alpha access-context-manager cloud-bindings create
/usr/local/Caskroom/google-cloud-sdk/latest/google-cloud-sdk/lib/surface/access_context_manager/cloud_bindings/update.py|gcloud alpha access-context-manager cloud-bindings update
/usr/local/Caskroom/google-cloud-sdk/latest/google-cloud-sdk/lib/surface/admin_service_cluster/__init__.py|gcloud alpha admin-service-cluster
```

Please note: there's probably a better way to do this. But this works, is very directly understandable, and only takes about a minute to populate `¯\_(ツ)_/¯`.

### Updating the Cache
There's no magic here. After sourcing the functions, just re-run:
```zsh
__gcloud_cmd_cache
```

## Uninstalling `fzf-gcloud`

### Manual Uninstallation
If you installed this plugin manually, please use the following steps:
- Remove the command cache database
```bash
[ -r "$GCLOUD_CMD_CACHE_DB" ] && rm -i "$GCLOUD_CMD_CACHE_DB"
```
- Remove the `source ~/.fzf-gcloud.plugin.zsh` lines from your `zshrc`

### Antigen Uninstallation
- Remove the command cache database
```bash
[ -r "$GCLOUD_CMD_CACHE_DB" ] && rm -i "$GCLOUD_CMD_CACHE_DB"
```
- Purge the antigen bundle
```zsh
antigen purge mbhynes/fzf-gcloud
```


