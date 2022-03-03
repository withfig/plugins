const plugin: Fig.Plugin = {
  name: "zabrze",
  type: "shell",
  description: "zsh abbreviation expansion plugin",
  github: "Ryooooooga/zabrze",
  shells: ["zsh"],
  tags: [
    "zsh",
    "zsh-plugin",
    "zsh-plugins",
    "zle-widgets",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
