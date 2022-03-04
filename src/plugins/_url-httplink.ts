const plugin: Fig.Plugin = {
  name: "_url-httplink",
  type: "shell",
  description: "ZSH Completion for http file listings",
  github: "Valodim/zsh-_url-httplink",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;