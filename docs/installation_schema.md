# Installation Schema 

Each plugin must have a valid `installation` for it to be able to be installed, 
the installation contains details on what files are sourced and any additional
commands that must be run for the plugin to work.

## Installation fields

### `origin`

The origin points to where the plugin should be downloaded from, currently the
only valid origin is `"github"`

Declaration: `origin: PluginOrigin`

#### `PluginOrigin` type

```typescript
type PluginOrigin = "github"
```

---

### `sourceFiles`

The `sourceFiles` defines what files should be ["sourced" (read and executed in
the shell)](https://ss64.com/bash/source.html).


Declaration: `sourceFiles?: string | string[]`


For Bash the `sourceFile` ususally matches one (or more) of the following:

```bash
*.plugin.bash
*.plugin.sh
*.bash
*.sh
```

For ZSH the `sourceFile` ususally matches one (or more) of the following:

```bash
*.plugin.zsh
*.zsh
*.zsh-theme
*.sh
```

---

### `preScript` and `postScript`

The `preScript` and `postScript` are both `InstallationScripts` that can run
before or after the plugin is sourced, these can be helpful if a plugin requires
some environment variable set or other command run.

Declaration: 
```typescipt 
preScript?: InstallationScripts
postScript?: InstallationScripts
```

### `bash`, `zsh`, and `fish`

By definining `bash`, `zsh`, or `fish` the behavior can be overrided for the
sepecific shell, this takes an object with `sourceFiles`, `preScript`, and 
`postScript`.

This is useful if there are diffrent files to source between shells or diffrent
scripts to run

