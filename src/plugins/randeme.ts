const plugin: Fig.Plugin = {
  name: "randeme",
  type: "shell",
  description: "Random theme manager for oh-my-zsh",
  github: "ex-surreal/randeme",
  shells: ["zsh"],
  tags: [
    "oh-my-zsh-plugin",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
