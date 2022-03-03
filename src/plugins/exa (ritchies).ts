const plugin: Fig.Plugin = {
  name: "exa (ritchies)",
  type: "shell",
  description: "Small oh-my-zsh plugin to add useful aliases for exa.",
  github: "RitchieS/zsh-exa",
  shells: ["zsh"],
  tags: [
    "oh-my-zsh-plugin",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
