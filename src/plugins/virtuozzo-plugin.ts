const plugin: Fig.Plugin = {
  name: "virtuozzo-plugin",
  type: "shell",
  description: "oh-my-zsh plugin for Virtuozzo",
  github: "TamCore/virtuozzo-zsh-plugin",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
