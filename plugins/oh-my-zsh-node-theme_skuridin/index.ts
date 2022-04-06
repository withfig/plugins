const plugin: Fig.Plugin = {
  icon: "🚀",
  name: "oh-my-zsh-node-theme_skuridin",
  displayName: "ZSH Node.js Theme",
  type: "shell",
  description: "Node.js theme for ZSH users",
  screenshots: [
    "https://github.com/skuridin/oh-my-zsh-node-theme/raw/master/screenshot.png",
  ],
  authors: [
    {
      name: "skuridin",
      github: "skuridin",
    },
  ],
  github: "skuridin/oh-my-zsh-node-theme",
  shells: ["zsh"],
  categories: ["Prompt"],
  installation: {
    origin: "github",
    sourceFiles: ["node.zsh-theme"],
  },
};

export default plugin;
