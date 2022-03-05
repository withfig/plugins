const plugin: Fig.Plugin = {
  name: "fzf-zsh-completions",
  type: "shell",
  description: "Fuzzy completions for fzf and Zsh",
  github: "chitoku-k/fzf-zsh-completions",
  shells: ["zsh"],
  tags: [
    "fzf",
    "zsh-plugin",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
