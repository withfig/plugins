const plugin: Fig.Plugin = {
  name: "dircolors-solarized (pinelibg)",
  type: "shell",
  description: "ZSH plugin for solarized dircolors",
  github: "pinelibg/dircolors-solarized-zsh",
  shells: ["zsh"],
  tags: [
    "zsh",
    "dircolors",
    "zsh-plugin",
    "solarized-theme",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
