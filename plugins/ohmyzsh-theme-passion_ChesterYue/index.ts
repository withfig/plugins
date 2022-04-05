const plugin: Fig.Plugin = {
  icon: "🧑‍💻",
  name: "ohmyzsh-theme-passion_ChesterYue",
  type: "shell",
  description: "An oh-my-zsh theme. ",
  authors: [
    {
      name: "ChesterYue",
      github: "ChesterYue",
    },
  ],
  github: "ChesterYue/ohmyzsh-theme-passion",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: ["zsh-theme"],
  installation: {
    origin: "github",
    sourceFiles: ["passion.zsh-theme"],
  },
};

export default plugin;
