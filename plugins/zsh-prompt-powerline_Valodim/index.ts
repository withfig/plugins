const plugin: Fig.Plugin = {
  name: "zsh-prompt-powerline_Valodim",
  type: "shell",
  description:
    "A ZSH prompt based on the powerline font from the popular vim plugin",
  authors: [
    {
      name: "Valodim",
      github: "Valodim",
    },
  ],
  github: "Valodim/zsh-prompt-powerline",
  shells: ["zsh"],
  categories: ["Prompt"],
  installation: {
    origin: "github",
    sourceFiles: ["example_config.zsh"],
  },
};

export default plugin;
