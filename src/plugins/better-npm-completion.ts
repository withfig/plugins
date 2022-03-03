const plugin: Fig.Plugin = {
  name: "better-npm-completion",
  type: "shell",
  description: "Better completion for npm",
  github: "lukechilds/zsh-better-npm-completion",
  shells: ["zsh"],
  tags: [
    "zsh",
    "npm",
    "completion",
    "zsh-plugin",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
