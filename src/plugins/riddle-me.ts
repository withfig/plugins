const plugin: Fig.Plugin = {
  name: "riddle-me",
  type: "shell",
  description: "Custom ZSH plugin to generate random Riddles. Mirrored from https://gitlab.com/vkolagotla/zsh-riddle-me",
  github: "vkolagotla/zsh-riddle-me",
  shells: ["zsh"],
  tags: [
    "zsh",
    "zshrc",
    "shell-script",
    "zsh-plugin",
    "zsh-plugins",
    "riddles",
    "riddle-game",
    "zsh-riddle",
    "random-riddles",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
