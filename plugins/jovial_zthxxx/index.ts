const plugin: Fig.Plugin = {
  icon: "⚡️",
  name: "jovial_zthxxx",
  type: "shell",
  description:
    "Jovial - A lovely zsh theme with responsive-design, it's pretty fast, keep simple but useful",
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
