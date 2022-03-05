const plugin: Fig.Plugin = {
  name: "command-time",
  type: "shell",
  description: "Show execution time for long commands in zsh",
  github: "popstas/zsh-command-time",
  shells: ["zsh"],
  tags: [
    "zsh",
    "oh-my-zsh",
    "powerlevel9k",
    "zsh-command-time",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
