const plugin: Fig.Plugin = {
  name: "passwordless-history",
  type: "shell",
  description: "Keep passwords out of your ZSH history",
  github: "jgogstad/passwordless-history",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
