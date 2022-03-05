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
    origin: "github",
  },
};

export default plugin;
