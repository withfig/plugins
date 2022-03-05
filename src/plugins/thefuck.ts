const plugin: Fig.Plugin = {
  name: "thefuck",
  type: "shell",
  description: "ZSH plugin with thefuck initialization and useful functions",
  github: "laggardkernel/zsh-thefuck",
  shells: ["zsh"],
  tags: [
    "zsh",
    "prezto",
    "zsh-plugin",
    "thefuck",
    "zplugin",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
