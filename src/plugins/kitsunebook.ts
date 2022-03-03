const plugin: Fig.Plugin = {
  name: "kitsunebook",
  type: "shell",
  description: "KitsuneBook plugin for oh-my-zsh",
  github: "d12frosted/kitsunebook.plugin.zsh",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
