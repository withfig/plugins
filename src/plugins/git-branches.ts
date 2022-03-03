const plugin: Fig.Plugin = {
  name: "git-branches",
  type: "shell",
  description: "An oh-my-zsh plugin to easily switch local or remote branches and delete a branch",
  github: "Schroefdop/git-branches",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
