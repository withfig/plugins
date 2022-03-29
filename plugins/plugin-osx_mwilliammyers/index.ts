const plugin: Fig.Plugin = {
  name: "plugin-osx_mwilliammyers",
  type: "shell",
  description: "plugin to add some common OS X related aliases and functions.",
  authors: [
    {
      name: "mwilliammyers",
      github: "mwilliammyers",
      twitter: "mwilliammyers",
    }
  ],
  github: "mwilliammyers/plugin-osx",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["osx-aliases.plugin.zsh"],
  },
};

export default plugin;
