const plugin: Fig.Plugin = {
  name: "jx",
  type: "shell",
  description: "Zsh plugin for Jenkins-X CLI",
  github: "haysclark/zsh-jx",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
