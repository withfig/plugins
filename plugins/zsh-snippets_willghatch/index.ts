const plugin: Fig.Plugin = {
  icon: "😀",
  name: "zsh-snippets_willghatch",
  displayName: "Zsh Snippets",
  type: "shell",
  description: "Snippet expansion for zsh",
  authors: [
    {
      name: "willghatch",
      github: "willghatch",
    },
  ],
  github: "willghatch/zsh-snippets",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["snippets.plugin.zsh"],
  },
};

export default plugin;
