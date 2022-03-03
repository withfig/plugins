const plugin: Fig.Plugin = {
  name: "node-ace",
  type: "shell",
  description: "ZSH completion script for node ace utility",
  github: "romch007/node-ace-zsh-completion",
  shells: ["zsh"],
  tags: [
    "nodejs",
    "zsh",
    "adonisjs",
    "zsh-completion",
    "adonis",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
