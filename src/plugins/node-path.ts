const plugin: Fig.Plugin = {
  name: "node-path",
  type: "shell",
  description: "ZSH plugin for automatically adding the \"npm bin\" of your current directory to your path.",
  github: "andyrichardson/zsh-node-path",
  shells: ["zsh"],
  tags: [
    "nodejs",
    "zsh",
    "terminal",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
