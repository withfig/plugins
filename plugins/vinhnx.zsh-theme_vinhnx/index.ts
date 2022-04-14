const plugin: Fig.Plugin = {
  icon: "💥",
  name: "vinhnx.zsh-theme_vinhnx",
  displayName: "Vinhnx",
  type: "shell",
  description:
    "My modified theme from themes/mgutz.zsh-theme, for oh-my-zsh (zshell). Looks great when using with Solarized color scheme.",
  authors: [
    {
      name: "vinhnx",
      github: "vinhnx",
      twitter: "vinhnx",
    },
  ],
  github: "vinhnx/vinhnx.zsh-theme",
  shells: ["zsh"],
  categories: ["Prompt"],
  installation: {
    origin: "github",
    sourceFiles: ["vinhnx.zsh-theme"],
  },
};

export default plugin;
