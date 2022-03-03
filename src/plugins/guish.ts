const plugin: Fig.Plugin = {
  name: "guish",
  type: "shell",
  description: "My plugin for oh-my-zsh - functions and aliases",
  github: "gcarrarom/oh-my-guish",
  shells: ["zsh"],
  tags: [
    "plugin",
    "shell",
    "kubernetes",
    "zsh",
    "azure",
    "aliases",
    "zsh-plugin",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
