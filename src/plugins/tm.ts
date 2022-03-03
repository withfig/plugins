const plugin: Fig.Plugin = {
  name: "tm",
  type: "shell",
  description: "Tmux shortcut plugin for zsh",
  github: "kjhaber/tm.zsh",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
