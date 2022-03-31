# Overview

A plugin spec is comprised of three components:

1. **Metadata**: any information that should be displayed in the Plugin Store. This includes details like the plugin author, a title, a description, screenshots, keywords and more.
2. **Installation**. Fig manages installing plugins on behalf of the user. Therefore, a plugin must define how to download the plugin and what changes need to be made to a user's dotfiles.
3. **Configuration**: Plugins are often customizable. A plugin spec defines all of the options that can be modified by a user, how they should be displayed and how they should be 'compiled' to a shell script. 



# Getting Started

**Prerequisites:**

-  Fork, clone & configure Plugins upstream

  - Click on the _Fork_ button on GitHub
  - Clone your fork
  - Add the upstream repository as a new remote

  ```sh
  # Clone repository
  git clone https://github.com/$YOUR_GITHUB_USER/plugins.git
  
  # Add upstream origin
  git remote add upstream git@github.com:withfig/plugins.git
  ```

- `node` & `npm` or`yarn`



**Adding a new plugin**:

1. Create a new folder with the name of your plugin

   > Make sure to review [these guidelines]() when naming your plugin.

2. Change directories into that folder. 

3. Create a `README.md`. 

   > This document will appear in the Plugin Store. It should summarize what the plugin does and highlight any important features.
   >
   > **It should not** include instructions on how to install the plugin as this is handled by Fig.

4. Create an `index.ts`. 

   > This `index.ts` is the entrypoint to your plugin. 

---

#### Metadata

All metadata is defined at the top-level of the Plugin spec.

```tsx
const plugin: Fig.Plugin = {
    name: "my-new-plugin",
    github: "withfig/my-new-plugin",
    description: "A one-line description of what this plugin does",
 		screenshots: ["images/example.png", "images/another-example.png"]
    shells: ["zsh"],
      
    authors: [ { name: "Fig", twitter: "@fig", github: "withfig"}]

		/* ... */
}
export default plugin;
```

**Note:** the value of `name` must match the folder that contains the `index.ts` file.



> See "Reference" for documentation on all of the possible metadata fields that can be added to a plugin.



#### Installation

When a user installs a plugin using Fig, the relevant scripts are downloaded to the user's device and changes are made to the user's dotfiles.

##### Downloading Plugin Scripts

If your plugin is hosted on GitHub, add the name of the repo to the `github` field. Then in the `installation`  block, set `origin` to `"github"`.

You can then specify what files from this repo should be sourced, using the `sourceFiles` field.

```tsx
const plugin: Fig.Plugin = {
    name: "my-new-plugin",
    github: "withfig/my-new-plugin",
		/* ... */
  	installation: {
      	origin: "github",
      	sourceFiles: "script.sh",
    }
}
export default plugin;
```

> **Note:** Plugins must be hosted in a public Github repo to be compatible with Fig.
>
>  Alternatively, you can include any necessary shell scripts inline in your `index.ts` file.

##### Modifying Dotfiles

Sometimes plugins must add other inline shell script directly to files like `~/.bashrc` and `~/.zshrc`. 

For example, `oh-my-zsh` sets the `ZSH` environment variable to the directory where it was installed. (Normally, ~/.oh-my-zsh).

This behavior can be preserved by defining `postScript` using a function, rather than a static script.

```tsx
const plugin: Fig.Plugin = {
		/* ... */
    installation: {
        origin: "github",
        sourceFiles: "oh-my-zsh.sh",
      	postScript: ({ ctx }) => {
          return `export ZSH="${ctx.plugin.installDirectory}""`
        }
      
    }
}
```

Note that `sourceFiles`, `preScript` and `postScript` can all be defined statically or using a function.

The context value includes other information

##### Shell-specific Installation

If your plugin can be used across multiple shells, you will likely need to manage the installation differently based on the users shell.

```tsx
const plugin: Fig.Plugin = {
		/* ... */
  	shells: ["bash", "zsh", "fish"]
    installation: {
        origin: "github",
        sourceFiles: "script.sh",
        fish: {
            sourceFiles: "script.fish"
        },
    }
}
```

In this example, for `bash` and `zsh`, the `script.sh` file will be sourced. While in `fish`, `script.fish` will be used instead.

Installation fields included at the top-level are overridden if the same field is included in a shell-specific block.



#### Configuration

Fig provides a user interface that allows users to customize the behavior of shell plugins without editing their dotfiles. This interface is defined by a list of configuration items. 

For every option that a user can customize, the plugin should define a corresponding configuration item.

You can think of a configuration item as a **mediator between a frontend UI component and a shell script.** You will specify:

1. How a configuration item should be rendered — should it's UI be a dropdown? a checkbox? a toggle?

   > Currently, there are 5 different types of UI components. If we are missing one, please open an [issue](https://github.com/withfig/plugins/issues/new).
   >
   > - Toggle
   > - Checkbox
   > - Text
   > - Select
   > - Multiselect

2. How this item should be converted to a shell script or environment variable?



##### Environment Variables

For example, in `oh-my-zsh` , the theme is set with the environment variable `ZSH_THEME`. To change themes, normally users need to open their `.zshrc` file and edit this value manually.

Instead, we want to provide a dropdown list, prepopulated with all of the possible values.

```tsx
const plugin: Fig.Plugin = {
		/* ... */
    configuration: [
    	{
    		// How should this appear in ~/.zshrc?
    		type: "environmentVariable",
    		environmentVariable: "ZSH_THEME",

				// How should this appear for the end user?
    		displayName: "Theme"
    		description: "Select a theme"
				interface: "select",
      	default: "robbyrussell",
      	options: ["robbyrussell",  "af-magic", "agnoster"]
    	}
    ]
}
```



Here we've defined a configuration item that represents an environment variable. It will compile down to a line of text that looks something like this:

```sh
ZSH_THEME="robbyrussell"
```

However, for the user, it will appear as a **dropdown list** with predefined values.



##### Shell Scripts

Not all plugins are configured with environment variables. 

For example, `pure-prompt` uses `zstyle` for certain settings, like whether or not to show the "git stash status".

```tsx
const plugin: Fig.Plugin = {
		/* ... */
    configuration: [
    	{
    		// How should this appear in ~/.zshrc?
    		type: "script",
    		name: "Git Stash Status",

				// How should this appear for the end user?
    		description: "Show git stash status as part of the prompt "
				interface: "toggle",
      	default: false,
        compile: ({ value }) => {
      		return `zstyle :prompt:pure:git:stash show ${value ? "yes" : "no"}`
      	}
    	}
    ]
}
```

Since scripts have much more variety than environment variables, we need to define a `compile` function ourselves, which takes the configuration value set in the UI and converts it to a shell script.



