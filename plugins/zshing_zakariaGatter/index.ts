const plugin: Fig.Plugin = {
  icon: "⌨️",
  name: "zshing_zakariaGatter",
  displayName: "Zshing",
  type: "shell",
  description: "Zsh plugin manager similar to VundleVim ",
  authors: [
    {
      name: "zakariaGatter",
      github: "zakariaGatter",
    },
  ],
  github: "zakariaGatter/zshing",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Framework"],
  keywords: ["zsh", "zsh-plugins", "shell", "shell-script", "plugin"],
  installation: {
    origin: "github",
    sourceFiles: ["zshing.zsh"],
  },
};

export default plugin;
