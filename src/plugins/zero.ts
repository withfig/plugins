const plugin: Fig.Plugin = {
  name: "zero",
  type: "shell",
  description: "theme and configuration plugin for zsh with oh-my-zsh",
  github: "arlimus/zero.zsh",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
