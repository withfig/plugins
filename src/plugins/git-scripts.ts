const plugin: Fig.Plugin = {
  name: "git-scripts",
  type: "shell",
  description: "A zsh plugin I made to simplify some git calls I use",
  github: "EthanLeisinger/zsh-git-scripts",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
