const plugin: Fig.Plugin = {
  name: "osx",
  type: "shell",
  description: "plugin to add some common OS X related aliases and functions.",
  github: "mwilliammyers/plugin-osx",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
