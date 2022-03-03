const plugin: Fig.Plugin = {
  name: "pg",
  type: "shell",
  description: "A ZSH plugin with utility functions to work with PostgreSQL.",
  github: "caarlos0-graveyard/zsh-pg",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
