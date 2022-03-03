const plugin: Fig.Plugin = {
  name: "history-here",
  type: "shell",
  description: "A zsh plugin to quickly isolate shell history recording.",
  github: "leonjza/history-here",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
