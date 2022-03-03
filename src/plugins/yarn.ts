const plugin: Fig.Plugin = {
  name: "yarn",
  type: "shell",
  description: "Zsh plugin for Yarn autocompletions.",
  github: "g-plane/zsh-yarn-autocompletions",
  shells: ["zsh"],
  tags: [
    "yarn",
    "zsh-plugin",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
