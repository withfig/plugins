const plugin: Fig.Plugin = {
  name: "zsh-pg_caarlos0-graveyard",
  type: "shell",
  description: "A ZSH plugin with utility functions to work with PostgreSQL.",
  authors: [
    {
      name: "caarlos0-graveyard",
      github: "caarlos0-graveyard",
    },
  ],
  github: "caarlos0-graveyard/zsh-pg",
  license: ["MIT"],
  shells: ["bash", "zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["build.sh"],
    },
    zsh: {
      sourceFiles: ["pg.plugin.zsh"],
    },
  },
};

export default plugin;
