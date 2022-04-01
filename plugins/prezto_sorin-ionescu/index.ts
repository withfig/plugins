const plugin: Fig.Plugin = {
  name: "prezto_sorin-ionescu",
  type: "shell",
  description: "The configuration framework for Zsh",
  authors: [
    {
      name: "sorin-ionescu",
      github: "sorin-ionescu",
    }
  ],
  github: "sorin-ionescu/prezto",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Framework"],
  installation: {
    origin: "github",
    sourceFiles: ["init.zsh"],
  },
};

export default plugin;
