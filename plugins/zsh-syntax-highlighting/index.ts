const plugin: Fig.Plugin = {
  name: "zsh-syntax-highlighting",
  type: "shell",
  description: "Fish shell like syntax highlighting for Zsh",
  icon: "https://avatars.githubusercontent.com/u/567410",
  github: "zsh-users/zsh-syntax-highlighting",
  license: ["BSD-3-Clause"],
  shells: ["zsh"],
  categories: ["Color"],
  keywords: [
    "shell",
    "syntax-highlighting",
    "zsh",
    "screenshot",
    "zsh-syntax-highlighting",
  ],

  installation: {
    origin: "github",
    sourceFiles: "zsh-syntax-highlighting.zsh",
  },
};

export default plugin;
