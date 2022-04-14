const plugin: Fig.Plugin = {
  icon: "😀",
  name: "zman_mattmc3",
  displayName: "Zman",
  type: "shell",
  description: "Use fzf to quickly browse Zsh manuals",
  authors: [
    {
      name: "mattmc3",
      github: "mattmc3",
    },
  ],
  github: "mattmc3/zman",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "zsh-plugin"],
  installation: {
    origin: "github",
    sourceFiles: ["zman.plugin.zsh"],
  },
};

export default plugin;
