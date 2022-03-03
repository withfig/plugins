const plugin: Fig.Plugin = {
  name: "case",
  type: "shell",
  description: "A ZSH plugin to change text casing",
  github: "rtuin/zsh-case",
  shells: ["zsh"],
  tags: [
    "zsh",
    "antigen",
    "zsh-plugin",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
