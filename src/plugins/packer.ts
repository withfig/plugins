const plugin: Fig.Plugin = {
  name: "packer",
  type: "shell",
  description: "Packer Plugin for Zsh.",
  github: "wakeful/zsh-packer",
  shells: ["zsh"],
  tags: [
    "zsh",
    "oh-my-zsh",
    "packer",
    "oh-my-zsh-plugin",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
