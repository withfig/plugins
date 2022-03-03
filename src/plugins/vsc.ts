const plugin: Fig.Plugin = {
  name: "vsc",
  type: "shell",
  description: "zsh plugin for Visual Studio Code",
  github: "davidtong/vsc.plugin.zsh",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
