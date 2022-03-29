const plugin: Fig.Plugin = {
  name: "smiley.zsh-theme_gsamokovarov",
  type: "shell",
  description: "Awesome prompt with happy and sad faces.",
  authors: [
    {
      name: "gsamokovarov",
      github: "gsamokovarov",
    }
  ],
  github: "gsamokovarov/smiley.zsh-theme",
  shells: ["zsh"],
  categories: ["Prompt"],
  installation: {
    origin: "github",
    sourceFiles: ["smiley.zsh-theme"],
  },
};

export default plugin;
