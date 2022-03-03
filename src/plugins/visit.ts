const plugin: Fig.Plugin = {
  name: "visit",
  type: "shell",
  description: "oh-my-zsh custom plugin for faster navigation",
  github: "justinpchang/visit",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
