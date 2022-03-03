const plugin: Fig.Plugin = {
  name: "watson.zsh",
  type: "shell",
  description: "A simple zsh plugin for Watson.",
  github: "bcho/Watson.zsh",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
