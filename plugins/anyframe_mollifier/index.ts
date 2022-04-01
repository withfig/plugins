const plugin: Fig.Plugin = {
  name: "anyframe_mollifier",
  type: "shell",
  description: "peco/percol/fzf wrapper plugin for zsh",
  authors: [
    {
      name: "mollifier",
      github: "mollifier",
    }
  ],
  github: "mollifier/anyframe",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["anyframe.plugin.zsh"],
  },
};

export default plugin;
