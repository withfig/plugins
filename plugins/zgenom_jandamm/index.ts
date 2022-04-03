const plugin: Fig.Plugin = {
  name: "zgenom_jandamm",
  type: "shell",
  description: "A lightweight and fast plugin manager for ZSH",
  authors: [
    {
      name: "jandamm",
      github: "jandamm",
      twitter: "jandammm",
    },
  ],
  github: "jandamm/zgenom",
  license: ["BSD-2-Clause"],
  shells: ["zsh"],
  categories: ["Framework"],
  keywords: ["zgen", "zsh", "prezto", "shell", "ohmyzsh", "plugin-manager", "zgenom"],
  installation: {
    origin: "github",
    sourceFiles: ["zgenom.zsh"],
  },
};

export default plugin;
