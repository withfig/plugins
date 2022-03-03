const plugin: Fig.Plugin = {
  name: "accurev",
  type: "shell",
  description: ".oh-my-zsh plugin for accurev",
  github: "dalefukami/accurev-zsh",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
