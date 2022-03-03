const plugin: Fig.Plugin = {
  name: "geeknote",
  type: "shell",
  description: "Geeknote plugin for oh-my-zsh",
  github: "s7anley/zsh-geeknote",
  shells: ["zsh"],
  tags: [
    "zsh",
    "geeknote",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
