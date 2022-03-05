const plugin: Fig.Plugin = {
  name: "defer",
  type: "shell",
  description: "Deferred execution of Zsh commands",
  github: "romkatv/zsh-defer",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
