const plugin: Fig.Plugin = {
  name: "tugboat",
  type: "shell",
  description: "Oh-my-zsh plugin for autocompletion of tugboat command",
  github: "DimitriSteyaert/Zsh-tugboat",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
