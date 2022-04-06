const plugin: Fig.Plugin = {
  icon: "😎",
  name: "anyframe_mollifier",
  type: "shell",
  description: "peco/percol/fzf wrapper plugin for zsh",
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
