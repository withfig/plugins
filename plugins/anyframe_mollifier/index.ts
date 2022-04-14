const plugin: Fig.Plugin = {
  name: "anyframe_mollifier",
  displayName: "Anyframe",
  description: "peco/percol/fzf wrapper plugin for zsh",
  icon: "🐱",
  type: "shell",
  authors: [
    {
      name: "mollifier",
      github: "mollifier",
    },
  ],
  github: "mollifier/anyframe",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["anyframe.plugin.zsh"],
    dependencies: [
      { type: "binary", name: "fzf" },
      { type: "binary", name: "peco" },
      { type: "binary", name: "percol" },
    ],
  },
};

export default plugin;
