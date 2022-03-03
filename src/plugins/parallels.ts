const plugin: Fig.Plugin = {
  name: "parallels",
  type: "shell",
  description: "oh-my-zsh plugin for Parallels Desktop",
  github: "benclark/parallels-zsh-plugin",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
