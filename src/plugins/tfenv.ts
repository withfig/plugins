const plugin: Fig.Plugin = {
  name: "tfenv",
  type: "shell",
  description: "zsh plugin for installing, updating and loading tfenv",
  github: "CDA0/zsh-tfenv",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;