const plugin: Fig.Plugin = {
  name: "neon_sahariko",
  type: "shell",
  description: "Pretty and minimal ZSH theme",
  authors: [
    {
      name: "sahariko",
      github: "sahariko",
    },
  ],
  github: "sahariko/neon",
  shells: ["bash", "zsh"],
  categories: ["Prompt"],
  keywords: ["zsh", "terminal", "theme"],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["installation.sh"],
    },
    zsh: {
      sourceFiles: ["neon.zsh-theme"],
    },
  },
};

export default plugin;
