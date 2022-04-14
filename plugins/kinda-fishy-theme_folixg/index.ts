const plugin: Fig.Plugin = {
  icon: "⌨️",
  name: "kinda-fishy-theme_folixg",
  displayName: "Kinda Fishy Theme",
  type: "shell",
  description: "oh-my-zsh theme based on fishy theme",
  authors: [
    {
      name: "folixg",
      github: "folixg",
    },
  ],
  github: "folixg/kinda-fishy-theme",
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: ["zsh-theme", "oh-my-zsh-theme"],
  installation: {
    origin: "github",
    sourceFiles: ["kinda-fishy.zsh-theme"],
  },
};

export default plugin;
