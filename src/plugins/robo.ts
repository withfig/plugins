const plugin: Fig.Plugin = {
  name: "robo",
  type: "shell",
  description: "A oh-my-zsh plugin for robo command completion.",
  github: "shengyou/robo-zsh-plugin",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
