const plugin: Fig.Plugin = {
  name: "hitokoto",
  type: "shell",
  description: "oh my zsh plugin",
  github: "derry96/hitokoto",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
