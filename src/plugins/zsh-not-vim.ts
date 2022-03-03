const plugin: Fig.Plugin = {
  name: "zsh-not-vim",
  type: "shell",
  description: "A zsh plugin to shame the user for forgetting they weren't in vim.",
  github: "redxtech/zsh-not-vim",
  shells: ["zsh"],
  tags: [
    "vim",
    "zsh",
    "cowsay",
    "zsh-plugin",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
