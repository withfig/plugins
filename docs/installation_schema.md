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

The `preScript` and `postScript` are both 
[`InstallationScripts`](#installationscript) that can run before or after the 
plugin is sourced, these can be helpful if a plugin requires some environment 
variable set or other command run.

_Declaration:_

```typescipt 
preScript?: InstallationScripts<string>
postScript?: InstallationScripts<string>
```

---

### `bash`, `zsh`, and `fish`

By definining `bash`, `zsh`, or `fish` the behavior can be overrided for the
sepecific shell, this takes an object with `sourceFiles`, `preScript`, and 
`postScript`.

This is useful if there are diffrent files to source between shells or diffrent
scripts to run.

---

### `InstallationScript`

An `InstallationScript` is a shell script that is used when installing a plugin.
The script can either be a static or dynamic based on the shell being used and
local context from the machine installing the plugin. The context currently only
has the directory the plugin is installed in. This is useful for referencing
other assests that are in the plugin directly from the script.


Declaration:

```typescript
type InstallationScript<T> = T | InstallationScriptCompiler<T>;
```

#### `InstallationScriptCompiler`

The `InstallationScriptCompiler` is a function that takes a 
[`DotfileCompilationContext`](#dotfilescompilationcontext) and returns a type `T`, 
this is likely either a `string` or `string[]`.

Declaration:

```typescript
type InstallationScriptCompiler<T> = (_: { ctx: DotfileCompilationContext }) => T;
```

#### `DotfileCompilationContext`

The `DoffilesCompilationContext` contains the `Shell` that the script should be
generated for and [`PluginContext`](#plugincontext) which contains the directory
where the plugin was cloned locally.

Declaration:

```typescript
interface DotfileCompilationContext {
  plugin: PluginContext;
  shell: "zsh" | "bash" | "fish";
  os: "linux" | "macos" | "windows" | "unknown";
}
```

#### `PluginContext`

```typescript
interface PluginContext {
  installDirectory: string;
}
```
