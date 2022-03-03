const plugin: Fig.Plugin = {
  name: "tipz",
  type: "shell",
  description: "Gives you helpful hints when you execute a command for which you have an alias defined",
  github: "molovo/tipz",
  shells: ["zsh"],
  tags: [
    "zsh",
    "aliases",
    "alias",
    "zsh-plugin",
    "zsh-plugins",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
