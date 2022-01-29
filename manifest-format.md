# Plugin Manifest

Every Fig plugin must have a manifest file. This file is a TOML file that
describes the plugin. 

- [`[plugin]`](#plugin) - (REQUIRED) This section is required
  - [`name`](#name) - (REQUIRED) The name of the plugin.
  - [`type`](#type) -  (REQUIRED) The type of plugin. This must be one of the following:
    - `shell` - A shell plugin, currently the only supported type.
  - [`description`](#description) - A short description of the plugin.
  - [`version`](#version) - The version of the plugin.
  - [`icon`](#icon) - A link to a small square image that represents the plugin
  - [`images`](#images) - A list of links to images of the plugin
  - [`site`](#site) - A link to the plugin's website
  - [`docs`](#docs) - A link to the plugin's documentation
  - [`github`](#github) - The `owner/repo` for the plugin's GitHub repository
  - [`repository`](#repository) - A link to the plugin's repository (not needed if `github` is provided)
  - [`readme`](#readme) - A link to the plugin's readme (not needed if `github` is provided)
  - [`twitter`](#twitter) - The `@username` for the plugin's Twitter account
  - [`authors`](#authors) - A list of authors for the plugin, either strings or the format:
    - `name` - The name of the author, this is the only required field for the author section
    - `twitter` - The `@username` for the author's Twitter account
    - `github` - The username for the author's GitHub account
  - [`license`](#license) - A the license(s) the plugin is released under
  - [`shells`](#shells) - A list of the shells that the plugin is compatible with
- [`[installation]`](#installation) (REQUIRED) based on the `type`
  - [`[installation.shell]`](#installationshell) - This defines how to install the plugin
    - [`source`](#source) - (REQUIRED) The source of the plugin, this can take one of the following:
      - `{git: <url>}` - A remote git repository
      - `{github: <true or owner/repo>}` - A GitHub repository, if true uses the `plugin.github` field
      - `{path: <path>}` - A local path
      - `{gist: <id>}` - A Gist
      - `{remote: <url>}` - A file from a remote URL
    - [`install`](#install) - The method of sourcing/installing the plugin
      - `source` - Files/glob to source in the shell
      - `apply` - A list of templates to apply using the plugin
      - `pre` - A list of commands to run before sourcing the plugin
      - `post` - A list of commands to run after sourcing the plugin

---

## `[plugin]`

### `name`

The name of the plugin, this should be unique and follow the following regex: `^[a-zA-Z0-9_-\.]+$`

This field is required.

### `type`

This is required and must be one of the following:

  - `shell` - A shell plugin, currently the only supported type.

### `description`

A short description of the plugin. Should be less than 80 characters.

### `version`

A version number for the plugin. Preferably in the format `x.y.z`

### `icon`

A link to a small square image that represents the plugin

Example: 

```toml
[plugin]
...
icon = "https://raw.githubusercontent.com/user/repo/master/icon.png"
```

### `images`

A list of links to images of the plugin

Example:

```toml
[plugin]
...
images = [
  "https://raw.githubusercontent.com/user/repo/master/image.png",
  "https://raw.githubusercontent.com/user/repo/master/image2.png",
]
```

### `site`

A link to the plugin's website

### `docs`

A link to the plugin's documentation

### `github`

The `owner/repo` for the plugin's GitHub repository

Example: `ohmyzsh/ohmyzsh` for the Oh My Zsh repository on GitHub

### `repository`

A link to the plugin's repository (not needed if `github` is provided)

### `readme`

A link to the plugin's readme (not needed if `github` is provided)

### `twitter`

The `@username` for the plugin's Twitter account

Example: `@ohmyzsh` for the Oh My Zsh Twitter account

### `authors`

The authors should be a list of strings or the format:

  - `name` - The name of the author, this is the only required field for the author section
  - `twitter` - The `@username` for the author's Twitter account
  - `github` - The username for the author's GitHub account

Example: 

```toml
[plugin]
...
authors = [
  "Grant Gurvis",
  {
    name = "Grant Gurvis",
    twitter = "@gurgrant",
    github = "grant0417"
  },
  {
    name = "Grant Gurvis",
  }
]
```

### `license`

The license(s) the plugin is released under

Example:

```toml
[plugin]
...
license = "MIT"
```

```toml
[plugin]
...
license = ["MIT", "Apache-2.0"]
```

### `shells`

The shells that the plugin is compatible with.

This field is required for `type = "shell"`.

The valid values are:

  - `bash`
  - `zsh`
  - `fish`

Example: `["bash", "zsh"]`

## `[installation]`

The installation section is based on the `type` field. This section is required and
tells how the plugin should be installed.

## `[installation.shell]`

### `source`

The source can be any of the following types

#### `git`

The two fields are:

  - `git` - (REQUIRED) The URL of the git repository
  - [A git reference](#git-reference)

Example: 

```toml
[installation.shell]
...
source = { git = "https://example.com/example.git" }
```

#### `github`

The two fields are:

  - `github` - (REQUIRED) The `owner/repo` for the GitHub repository, if true uses the `plugin.github` field
  - [A git reference](#git-reference)

Example:

```toml
[installation.shell]
...
source = { github = "ohmyzsh/ohmyzsh" }
```

```toml
[installation.shell]
...
source = { github = true }
```

#### `path`

  - `path` - (REQUIRED) The path to the plugin

Example:

```toml
[installation.shell]
...
source = { path = "~/path/to/plugin" }
```

Note: This should only be used for local development and not for production.

#### `gist`

  - `gist` - (REQUIRED) The ID of the Gist
  - `checksum` - The SHA-256 checksum of the Gist data, this can be generated with `sha256sum`

Example:

```toml
[installation.shell]
...
source = { gist = "12345" }
```

```toml
[installation.shell]
...
source = { gist = "12345", checksum = "12345" }
```

#### `remote`

  - `remote` - (REQUIRED) The URL of the remote file
  - `checksum` - The SHA-256 checksum of the remote file, this can be generated with `sha256sum`

Example:

```toml
[installation.shell]
...
source = { remote = "https://example.com/example.zsh" }
```

```toml
[installation.shell]
...
source = { remote = "https://example.com/example.zsh", checksum = "12345" }
```

### Git Reference

Both `git` and `github` can take a Git reference. The Git reference can be any of the following:

  - `commit` - A Commit hash
  - `tag` - A Tag
  - `branch` - A Branch

Example:

```toml
[installation.shell]
...
source = {
  git = "https://example.com/example.git",
  branch = "develop"
}
```

```toml
[installation.shell]
...
source = {
  git = "https://example.com/example.git",
  tag = "v1.0.0"
}
```

```toml
[installation.shell]
...
source = {
  git = "https://example.com/example.git",
  commit = "a1b2c3d4e5f6g7h8i9j0"
}
```

### `install`

#### `source`

Files/glob to source in the shell

Example: 

```toml
[installation.shell]
...
install = { source = ["plugin.sh", "*.zsh" ] }
```

#### `apply`

A list of templates to apply using the plugin

```toml
[installation.shell]
...
install = { apply = ["PATH"] }
```

#### `pre`

A list of commands to run before sourcing the plugin

Example:

```toml
[installation.shell]
...
install = { pre = ["command1", "command2"] }
```


#### `post`

A list of commands to run after sourcing the plugin

```toml
[installation.shell]
...
install = { post = ["command1", "command2"] }
```
