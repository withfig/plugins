const plugin: Fig.Plugin = {
  name: "surf",
  type: "shell",
  description: "A oh-my-zsh plugin for surf command completion.",
  github: "beardcoder/surf.plugin.zsh",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
