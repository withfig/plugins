const plugin: Fig.Plugin = {
  name: "oh-my-zsh-powerline-theme_brucehsu",
  type: "shell",
  description: "oh-my-zsh Powerline style Theme",
  authors: [
    {
      name: "brucehsu",
      github: "brucehsu",
    },
  ],
  github: "brucehsu/oh-my-zsh-powerline-theme",
  shells: ["zsh"],
  categories: ["Prompt"],
  installation: {
    origin: "github",
    sourceFiles: ["powerline.zsh-theme"],
  },
};

export default plugin;
