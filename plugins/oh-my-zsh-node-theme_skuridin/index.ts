const plugin: Fig.Plugin = {
  name: "oh-my-zsh-node-theme_skuridin",
  type: "shell",
  description: "Node.js theme for ZSH users",
  authors: [
    {
      name: "skuridin",
      github: "skuridin",
    }
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
