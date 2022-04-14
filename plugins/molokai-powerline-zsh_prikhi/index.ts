const plugin: Fig.Plugin = {
  icon: "🌟",
  name: "molokai-powerline-zsh_prikhi",
  displayName: "Molokai Powerline Zsh",
  type: "shell",
  description: "A Zsh theme based off of molokai, powerline, ys and agnoster ",
  authors: [
    {
      name: "prikhi",
      github: "prikhi",
    },
  ],
  github: "prikhi/molokai-powerline-zsh",
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: ["molokai", "zsh", "powerline", "theme", "zsh-theme"],
  installation: {
    origin: "github",
    sourceFiles: ["molokai-powerline.zsh-theme"],
  },
};

export default plugin;
