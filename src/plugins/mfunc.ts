const plugin: Fig.Plugin = {
  name: "mfunc",
  type: "shell",
  description: "function wrapper plugin for oh-my-zsh",
  github: "hlohm/mfunc",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
