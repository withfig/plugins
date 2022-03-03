const plugin: Fig.Plugin = {
  name: "smart-cd",
  type: "shell",
  description: "zsh plugin that runs `ls` and `git status` after chpwd",
  github: "dbkaplun/smart-cd",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
