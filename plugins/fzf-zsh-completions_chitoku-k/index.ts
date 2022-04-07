const plugin: Fig.Plugin = {
  icon: "💡",
  name: "fzf-zsh-completions_chitoku-k",
  displayName: "fzf-zsh-completions",
  type: "shell",
  description: "Fuzzy completions for fzf and Zsh",
  screenshots: [
    "https://user-images.githubusercontent.com/6535425/96915303-0d674180-14e1-11eb-8a14-5b3cd3673a49.png",
    "https://user-images.githubusercontent.com/6535425/96915276-06403380-14e1-11eb-9697-3cd40db7cc58.png",
    "https://user-images.githubusercontent.com/6535425/96915321-10fac880-14e1-11eb-9222-93fd5a1563b4.png",
  ],
  authors: [
    {
      name: "chitoku-k",
      github: "chitoku-k",
    },
  ],
  github: "chitoku-k/fzf-zsh-completions",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Completion"],
  keywords: ["fzf", "zsh-plugin"],
  installation: {
    origin: "github",
    sourceFiles: ["fzf-zsh-completions.plugin.zsh"],
    dependencies: [
      {
        type: "binary",
        name: "fzf",
      },
      {
        type: "binary",
        name: "jq",
      },
    ],
  },
};

export default plugin;
