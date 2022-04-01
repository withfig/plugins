const plugin: Fig.Plugin = {
  name: "oh-my-zsh-solarized-powerline-theme_kuoe0",
  type: "shell",
  description: "oh-my-zsh Powerline style Theme - Solarized Color Scheme",
  authors: [
    {
      name: "kuoe0",
      github: "kuoe0",
    }
  ],
  github: "kuoe0/oh-my-zsh-solarized-powerline-theme",
  shells: ["zsh"],
  categories: ["Prompt"],
  installation: {
    origin: "github",
    sourceFiles: ["solarized-powerline.zsh-theme"],
  },
};

export default plugin;
