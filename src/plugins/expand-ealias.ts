const plugin: Fig.Plugin = {
  name: "expand-ealias",
  type: "shell",
  description: "expand specific aliases with space",
  github: "zigius/expand-ealias.plugin.zsh",
  shells: ["zsh"],
  tags: [
    "zsh",
    "zsh-plugins",
    "expanding-aliases",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
