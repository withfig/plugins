const plugin: Fig.Plugin = {
  name: "gtr",
  type: "shell",
  description: "ZSH plugin for fast signed tagging of releases in git",
  github: "Zocker1999NET/zsh-gtr",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
