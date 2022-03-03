const plugin: Fig.Plugin = {
  name: "zman",
  type: "shell",
  description: "Use fzf to quickly browse Zsh manuals",
  github: "mattmc3/zman",
  shells: ["zsh"],
  tags: ["zsh", "zsh-plugin"],
  installation: {
    source: "github",
  },
};

export default plugin;
