const plugin: Fig.Plugin = {
  name: "pew",
  type: "shell",
  description: "Zsh plugin that sets up and manages virtualenvs using pew, automatically switches virtualenvs as you move directories",
  github: "shosca/zsh-pew",
  shells: ["zsh"],
  tags: [
    "zsh",
    "zsh-plugin",
    "zsh-plugins",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
