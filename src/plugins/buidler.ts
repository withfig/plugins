const plugin: Fig.Plugin = {
  name: "buidler",
  type: "shell",
  description: "ZSH autocompletion plugin for Nomiclabs buidler",
  github: "gonzalobellino/buidler-zsh",
  shells: ["zsh"],
  tags: [
    "zshrc",
    "buidler",
    "nomiclabs-buidler",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
