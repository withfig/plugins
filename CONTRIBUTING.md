# 😎 Contributing Guide

This guide will help you set up the Fig development environment, write your first plugin spec, and contribute it! 🚀

## Plugin Spec Overview

A plugin spec is a _declarative_ schema comprised of three components:

1. **[Metadata](docs/plugins_schema.md)**: Information that is displayed in the "Summary" tab of a Plugin's preview page. This includes details like the plugin author, title, description, screenshots, keywords etc
2. **[Installation](docs/installation_schema.md)**:  The steps that Fig must take to download and install a plugin on behalf a user. This includes where the plugin should be installed from (e.g. which GitHub repo), which specific files should be downloaded, and what information needs to be soruced in a user's dotfiles.
3. **[Configuration](docs/configuration_schema.md)**: All of the settings/options for a plugin that can be modified by a user. Each configuration lets you customize how it should be displayed (e.g. an input box, checkbox, or multiselect), what the default is, and how it should be compiled to a shell script. These configurations are displayed in the "Configuration" tab of the Plugin's preview page. 


Please click on the links above for the full schema and descriptions for each.


## Getting Started

**Prerequisites**

- Node.js and `npm` or `yarn`


### Set up repository

<p>1. Create your own copy of <a href="https://github.com/withfig/plugins">withfig/plugins</a> by forking the repository. 
	
[![GitHub forks](https://img.shields.io/github/forks/withfig/plugins?style=social)](https://github.com/withfig/plugins/fork)
	
</p>


2. Once you have created your own fork, clone the repo to your local machine.

Make sure to replace `YOUR_GITHUB_USERNAME` with your actual username.

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/plugins.git fig-plugins
```

3. Link your fork back to the upstream repo so you can pull the latest updates and contribute changes back.

```bash
cd fig-plugins
git remote add upstream https://github.com/withfig/plugins.git
```

4. Finally, you'll need to install dependencies.

```bash
npm install
```



### Adding a new plugin

1. Go to the `plugins/` directory and create a new folder

   > The folder name must be the same name as your plugin `name`. Make sure the name is unique and descriptive. 

2. In that folder: 
  1. Create an `index.ts` file. 

   > This `index.ts` is the schema for your plugin.

  2. Create a `README.md`

   > This document will appear in the Plugin Store under the "Summary" tab. It should summarize what the plugin does and highlight any important features.
   >
   > **It should not** include instructions on how to install the plugin as this is handled by Fig.

  3. Create an `images/` directory

   > This where you will store images and screenshots of your plugin in action

---

### Add Metadata to your Plugin

All metadata is defined at the top-level of the Plugin spec. You can see all the metadata fields and their descriptions [here](docs/plugins_schema.md)

Here is a dummy example

```tsx
const plugin: Fig.Plugin = {
    name: "my-new-plugin",
    displayName: "My New Plugin",
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

---

### Adding `Installation` to a Plugin

When a user installs a plugin using Fig, the relevant scripts are downloaded to the user's device and changes are made to the user's dotfiles. Fig handles the downloading and sourcing, you just need to tell us where to download from and what we need to source!

You can see everything related to installation in our [installation docs](docs/installation_schema.md) or follow the dummy example below.

##### Downloading Plugin Scripts

If your plugin is hosted on GitHub, add the name of the repo to the `github` field. Then in the `installation`  block, set `origin` to `"github"`.

You can then specify what files from this repo should be sourced, using the `sourceFiles` field. Most of the time this is the main `.sh`, `.zsh` or `.bash` file in the repo.

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

##### Modifying a User's Dotfiles

Sometimes plugins must add other inline shell script directly to files like `~/.bashrc` and `~/.zshrc`. 

For example, `oh-my-zsh` sets the `ZSH` environment variable to the directory where it was installed. (Normally, ~/.oh-my-zsh).

You can add such shell scripts to the user's dotfiles before the plugin is sourced using `preScript` and after it is sourced using the `postScript` prop. 

Both `preScript` and `postScript` can be strings, an array of strings, or a function that takes one argument of type [DotfileCompilationContext](installation_schema.md#dotfilecompilationcontext)

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

---



### Configuration

Fig provides a UI that allows users to customize the behavior of shell plugins all from within the Fig app. This interface is defined by a list of configuration items. 

You can see everything related to configuration in our [configuration docs](docs/configuration_schema.md) or follow the dummy example below.


#### Understanding Configuration Items
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


#### Configuration Types

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
    		name: "ZSH_THEME",

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




## Contribute
Once you've made your changes, Contribute!!

While we flesh out our docs for withfig/plugins, we recommend you follow the contribution page for our autocomplete repo: https://fig.io/docs/getting-started/contributing (just replace `autocomplete` with `plugins`)


This repo is still early. If you have any feedback, please create an issue or join our Discord: [fig.io/community](https://fig.io/community )
