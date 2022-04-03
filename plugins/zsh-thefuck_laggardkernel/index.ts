const plugin: Fig.Plugin = {
  name: "zsh-thefuck_laggardkernel",
  type: "shell",
  description: "ZSH plugin with thefuck initialization and useful functions",
  authors: [
    {
      name: "laggardkernel",
      github: "laggardkernel",
    },
  ],
  github: "laggardkernel/zsh-thefuck",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh-plugin", "zsh", "thefuck", "prezto", "zplugin"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-thefuck.plugin.zsh"],
  },
};

export default plugin;
