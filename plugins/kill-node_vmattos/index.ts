const plugin: Fig.Plugin = {
  name: "kill-node_vmattos",
  type: "shell",
  description: "zsh plugin for murdering node proc families",
  authors: [
    {
      name: "vmattos",
      github: "vmattos",
    },
  ],
  github: "vmattos/kill-node",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["kill-node.plugin.zsh"],
  },
};

export default plugin;
