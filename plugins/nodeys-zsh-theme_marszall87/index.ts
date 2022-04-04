const plugin: Fig.Plugin = {
  name: "nodeys-zsh-theme_marszall87",
  type: "shell",
  description: "Just ys zsh theme with NodeJS version.",
  authors: [
    {
      name: "marszall87",
      github: "marszall87",
    },
  ],
  github: "marszall87/nodeys-zsh-theme",
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: [
    "zsh",
    "terminal",
    "terminal-themes",
    "theme",
    "git",
    "nodejs",
    "prompt",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["nodeys.zsh-theme"],
  },
};

export default plugin;
