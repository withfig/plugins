const plugin: Fig.Plugin = {
  icon: "🧑‍💻",
  name: "macos-zsh-theme_alejandromume",
  type: "shell",
  authors: [
    {
      name: "alejandromume",
      github: "alejandromume",
    },
  ],
  github: "alejandromume/macos-zsh-theme",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Prompt"],
  installation: {
    origin: "github",
    sourceFiles: ["macos-theme.zsh-theme"],
  },
};

export default plugin;
