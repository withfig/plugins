const plugin: Fig.Plugin = {
  name: "ax-zsh_alexbarton",
  displayName: "Ax Zsh",
  description: "Modular configuration system for the Z shell (ZSH)",
  icon: "🪓",
  type: "shell",
  authors: [
    {
      name: "alexbarton",
      github: "alexbarton",
      twitter: "alexbarton",
    },
  ],
  github: "alexbarton/ax-zsh",
  license: ["MIT"],
  shells: ["bash", "zsh"],
  categories: ["Framework"],
  keywords: [
    "zsh",
    "plugin-manager",
    "configuration",
    "manager",
    "ax-zsh",
    "shell",
    "plugin",
  ],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["install.sh"],
    },
    zsh: {
      sourceFiles: ["ax.zsh"],
    },
  },
};

export default plugin;
