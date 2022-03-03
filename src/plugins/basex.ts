const plugin: Fig.Plugin = {
  name: "basex",
  type: "shell",
  description: "A BaseX plugin for zsh",
  github: "dirkk/zsh-basex",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
