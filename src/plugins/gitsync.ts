const plugin: Fig.Plugin = {
  name: "gitsync",
  type: "shell",
  description: "zsh plugin to improve workflows for one person developing on the same repository on multiple machines",
  github: "washtubs/gitsync",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
