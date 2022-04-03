const plugin: Fig.Plugin = {
  name: "osx-dev-zsh-plugin_marshallmick007",
  type: "shell",
  description:
    "This plugin adds some commands for maintaining various server programs on my OSX install.",
  authors: [
    {
      name: "marshallmick007",
      github: "marshallmick007",
    },
  ],
  github: "marshallmick007/osx-dev-zsh-plugin",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["osx-dev.plugin.zsh"],
  },
};

export default plugin;
