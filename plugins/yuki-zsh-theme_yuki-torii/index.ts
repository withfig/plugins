const plugin: Fig.Plugin = {
  icon: "⛩",
  name: "yuki-zsh-theme_yuki-torii",
  displayName: "Yuki Zsh Theme",
  type: "shell",
  description: "The Yuki Zsh Theme",
  authors: [
    {
      name: "yuki-torii",
      github: "yuki-torii",
    },
  ],
  github: "yuki-torii/yuki-zsh-theme",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: ["yuki", "zsh-theme"],
  installation: {
    origin: "github",
    sourceFiles: ["yuki.zsh-theme"],
  },
};

export default plugin;
