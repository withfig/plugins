const plugin: Fig.Plugin = {
  name: "terminal-title",
  type: "shell",
  description: "A zsh terminal title setting plugin based on a script from romkatv",
  github: "AnimiVulpis/zsh-terminal-title",
  shells: ["zsh"],
  tags: [
    "zsh",
    "terminal",
    "zinit-plugin",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
