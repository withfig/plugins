const plugin: Fig.Plugin = {
  icon: "💡",
  name: "ozono-zsh-theme_sfabrizio",
  displayName: "OZono Zsh Theme",
  type: "shell",
  description: "🌏 OZ0NO - Let's Breathe a clean ZSH",
  authors: [
    {
      name: "sfabrizio",
      github: "sfabrizio",
    },
  ],
  github: "sfabrizio/ozono-zsh-theme",
  license: ["MIT"],
  shells: ["bash", "zsh"],
  categories: ["Prompt"],
  keywords: ["oh-my-zsh-theme", "oh-my-zsh", "bash", "bashrc", "zsh"],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["install.sh"],
    },
    zsh: {
      sourceFiles: ["ozono-theme.zsh"],
    },
  },
};

export default plugin;
