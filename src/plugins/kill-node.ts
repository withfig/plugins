const plugin: Fig.Plugin = {
  name: "kill-node",
  type: "shell",
  description: "zsh plugin for murdering node proc families",
  github: "vmattos/kill-node",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
