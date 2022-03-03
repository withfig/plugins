const plugin: Fig.Plugin = {
  name: "git-complete-urls",
  type: "shell",
  description: "Zsh plugin to enhance git completion to include in the remotes completion (e.g. from `git clone`) any URL in the clipboard",
  github: "rapgenic/zsh-git-complete-urls",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
