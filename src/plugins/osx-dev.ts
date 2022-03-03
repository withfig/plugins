const plugin: Fig.Plugin = {
  name: "osx-dev",
  type: "shell",
  description: "This plugin adds some commands for maintaining various server programs on my OSX install.",
  github: "marshallmick007/osx-dev-zsh-plugin",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
