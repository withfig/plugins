const plugin: Fig.Plugin = {
  name: "k",
  type: "shell",
  description: "k is the new l, yo",
  authors: [
    {
      name: "supercrabtree",
      github: "supercrabtree",
    },
  ],
  github: "supercrabtree/k",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["k.plugin.zsh"],
  },
};

export default plugin;
