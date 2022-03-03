const plugin: Fig.Plugin = {
  name: "flow-plugin",
  type: "shell",
  description: "Neos Flow Plugin for Oh-my-ZSH",
  github: "sandstorm/oh-my-zsh-flow-plugin",
  shells: ["zsh"],
  tags: [
    "hacktoberfest",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
