const plugin: Fig.Plugin = {
  name: "Nord-zsh_TyWR",
  type: "shell",
  description: "Custom theme for ZSH terminal",
  authors: [
    {
      name: "TyWR",
      github: "TyWR",
    },
  ],
  github: "TyWR/Nord-zsh",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: ["zsh-theme"],
  installation: {
    origin: "github",
    sourceFiles: ["tywr.zsh-theme"],
  },
};

export default plugin;
