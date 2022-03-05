const plugin: Fig.Plugin = {
  name: "exercism",
  type: "shell",
  description: "A Plugin to Oh My Zsh Framework",
  github: "fabiokiatkowski/exercism.plugin.zsh",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
