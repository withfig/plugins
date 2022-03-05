const plugin: Fig.Plugin = {
  name: "ipfs",
  type: "shell",
  description: "ZSH completion plugin for IPFS (InterPlanetary File System)",
  github: "hellounicorn/zsh-ipfs",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
