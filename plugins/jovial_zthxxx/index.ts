const plugin: Fig.Plugin = {
  icon: "⚡️",
  name: "jovial_zthxxx",
  displayName: "Jovial Theme",
  type: "shell",
  description:
    "A lovely zsh theme that's fast and has responsive design. Simple but useful",
  authors: [
    {
      name: "zthxxx",
      github: "zthxxx",
      twitter: "zthxxxxx",
    },
  ],
  github: "zthxxx/jovial",
  license: ["MIT"],
  shells: ["bash", "zsh"],
  categories: ["Prompt"],
  keywords: ["zsh", "theme", "zsh-theme", "zshtheme", "jovial", "oh-my-zsh"],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["installer.sh"],
    },
    zsh: {
      sourceFiles: ["jovial.plugin.zsh"],
    },
  },
};

export default plugin;
