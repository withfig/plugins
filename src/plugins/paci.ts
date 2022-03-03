const plugin: Fig.Plugin = {
  name: "paci",
  type: "shell",
  description: "Zsh plugin for archlinux package managers",
  github: "iloginow/zsh-paci",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
