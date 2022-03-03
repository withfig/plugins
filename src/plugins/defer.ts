const plugin: Fig.Plugin = {
  name: "defer",
  type: "shell",
  description: "Deferred execution of Zsh commands",
  github: "romkatv/zsh-defer",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
