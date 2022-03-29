const plugin: Fig.Plugin = {
  name: "fzf-zsh-completions_chitoku-k",
  type: "shell",
  description: "Fuzzy completions for fzf and Zsh",
  authors: [
    {
      name: "chitoku-k",
      github: "chitoku-k",
    }
  ],
  github: "chitoku-k/fzf-zsh-completions",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Compleation"],
  keywords: [
    "fzf",
    "zsh-plugin",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["fzf-zsh-completions.plugin.zsh"],
  },
};

export default plugin;
