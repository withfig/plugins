const plugin: Fig.Plugin = {
  name: "k",
  type: "shell",
  description: "k is the new l, yo",
  icon: "https://raw.githubusercontent.com/supercrabtree/k/gh-pages/k-logo.png",
  authors: [
    {
      name: "supercrabtree",
      github: "supercrabtree",
    },
  ],
  github: "supercrabtree/k",
  shells: ["zsh"],
  categories: ["Other", "Color"],
  installation: {
    origin: "github",
    sourceFiles: ["k.plugin.zsh"],
  },
};

export default plugin;
