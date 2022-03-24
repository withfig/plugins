# Creating a Plugin

## 1. Copy template

Copy the following template to a new file in the `src/plugins` directory.

```typescript
const plugin: Fig.Plugin = {
  name: "abc",
  type: "shell",
  github: "abc/abc",
  installation: {
    origin: "github",
  },
};
export default plugin;
```

## 2. Fill in metadata

 - `name` must have the same value as the file name.
 
 - Change the value of `github` such that it is the `owner/repo` that the 
plugin is stored at, for example the `owner/name` of this repo is 
`withfig/plugins`.

 - Fill in any other metadata that you can according to the 
 [schema](plugins_schema.md)

```typescript
const plugin: Fig.Plugin = {
  name: "abc",
  type: "shell",
  description: "A description about the plugin",
  icon: "🅰️",
  site: "https://example.com",
  github: "abc/abc",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
  },
};
export default plugin;
```

## 2. Determine the file that needs to be sourced

For a shell plugin to work there is typically a file(s) that needs
to be sourced in the .bashrc/.zshrc, you will need to determine the
relative path of this file in the plugin repo. For more details go to
the [`sourceFiles` docs](installation_schema.md#sourcefiles).


```typescript
const plugin: Fig.Plugin = {
  name: "abc",
  type: "shell",
  description: "A description about the plugin",
  icon: "🅰️",
  site: "https://example.com",
  github: "abc/abc",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["abc.plugin.zsh"],
  },
};
export default plugin;
```

## 3. Add configuration settings for the plugin

Most plugins are configured with environment variables, 
