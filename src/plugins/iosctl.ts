const plugin: Fig.Plugin = {
  name: "iosctl",
  type: "shell",
  description: "iosctl is a plugin for Zsh to quickly access App, Data, and Log of the running simulator.",
  github: "obayer/iosctl",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
