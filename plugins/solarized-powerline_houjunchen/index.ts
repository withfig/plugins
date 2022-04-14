const plugin: Fig.Plugin = {
  icon: "🌟",
  name: "solarized-powerline_houjunchen",
  displayName: "Solarized Powerline",
  type: "shell",
  description: "Solarized powerline style theme for zsh",
  authors: [
    {
      name: "houjunchen",
      github: "houjunchen",
    },
  ],
  github: "houjunchen/solarized-powerline",
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: ["zsh-theme", "solarized", "zsh", "powerline", "oh-my-zsh"],
  installation: {
    origin: "github",
    sourceFiles: ["solarized-powerline.zsh-theme"],
  },
};

export default plugin;
