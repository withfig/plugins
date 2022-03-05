const plugin: Fig.Plugin = {
  name: "quoter",
  type: "shell",
  description: "A ZSH plugin for displaying random quotes when opening a terminal.",
  github: "owenvoke/quoter-zsh",
  shells: ["zsh"],
  tags: [
    "plugin",
    "quotes",
    "zsh",
    "cli",
    "zsh-plugins",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
