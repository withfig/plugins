const plugin: Fig.Plugin = {
  name: "antigen-git-rebase",
  type: "shell",
  description: "An Antigen/zsh script to help with rebasing",
  github: "smallhadroncollider/antigen-git-rebase",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
