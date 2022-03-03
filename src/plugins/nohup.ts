const plugin: Fig.Plugin = {
  name: "nohup",
  type: "shell",
  description: "Nohup plugin for ZSH shell",
  github: "micrenda/zsh-nohup",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
