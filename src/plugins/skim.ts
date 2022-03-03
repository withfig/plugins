const plugin: Fig.Plugin = {
  name: "skim",
  type: "shell",
  description: "Zsh plugin for skim (https://github.com/lotabout/skim)",
  github: "hackerchai/skim-zsh",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
