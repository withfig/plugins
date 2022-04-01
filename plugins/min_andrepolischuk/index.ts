const plugin: Fig.Plugin = {
  name: "min_andrepolischuk",
  type: "shell",
  description: "Minimalistic zsh prompt",
  authors: [
    {
      name: "andrepolischuk",
      github: "andrepolischuk",
      twitter: "andrepolischuk",
    }
  ],
  github: "andrepolischuk/min",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: [
    "minimal",
    "zsh",
    "prompt",
    "theme",
    "shell",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["min.plugin.zsh"],
  },
};

export default plugin;
