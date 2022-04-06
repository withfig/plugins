const plugin: Fig.Plugin = {
  icon: "⌨️",
  name: "zemm-blinks.zsh-theme_aranasaurus",
  type: "shell",
  description: "My customization of the blinks oh-my-zsh theme",
  authors: [
    {
      name: "aranasaurus",
      github: "aranasaurus",
      twitter: "aranasaurus",
    },
  ],
  github: "aranasaurus/zemm-blinks.zsh-theme",
  shells: ["zsh"],
  categories: ["Prompt"],
  installation: {
    origin: "github",
    sourceFiles: ["zemm-blinks.zsh-theme"],
  },
};

export default plugin;
