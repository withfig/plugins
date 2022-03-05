const plugin: Fig.Plugin = {
  name: "zsh-z (ptavares)",
  type: "shell",
  description: "zsh plugin for installing and loading z",
  github: "ptavares/zsh-z",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
