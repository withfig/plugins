const plugin: Fig.Plugin = {
  name: "prompt-generator",
  type: "shell",
  description: "A rust tool to create a customized Zsh prompt",
  github: "the10thWiz/zsh-prompt-generator",
  shells: ["zsh"],
  tags: [
    "zsh",
    "zsh-theme",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
