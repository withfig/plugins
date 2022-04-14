const plugin: Fig.Plugin = {
  icon: "🌟",
  name: "zsh-theme_igor9silva",
  displayName: "igor9silva's Zsh Theme",
  type: "shell",
  description: "Minimalist theme for oh-my-zsh.",
  authors: [
    {
      name: "igor9silva",
      github: "igor9silva",
    },
  ],
  github: "igor9silva/zsh-theme",
  license: ["NOASSERTION"],
  shells: ["zsh"],
  categories: ["Prompt"],
  installation: {
    origin: "github",
    sourceFiles: ["igorsilva.zsh-theme"],
  },
};

export default plugin;
