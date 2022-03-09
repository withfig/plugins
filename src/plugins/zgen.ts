const plugin: Fig.Plugin = {
  name: "zgen",
  type: "shell",
  description: "A lightweight and simple plugin manager for ZSH",
  authors: [
    {
      name: "tarjoilija",
      github: "tarjoilija",
    },
  ],
  github: "tarjoilija/zgen",
  license: ["BSD-2-Clause"],
  shells: ["zsh"],
  categories: ["Framework"],
  installation: {
    origin: "github",
    sourceFiles: ["zgen.zsh"],
  },
};

export default plugin;
