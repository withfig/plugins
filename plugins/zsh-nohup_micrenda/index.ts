const plugin: Fig.Plugin = {
  name: "zsh-nohup_micrenda",
  type: "shell",
  description: "Nohup plugin for ZSH shell",
  authors: [
    {
      name: "micrenda",
      github: "micrenda",
    }
  ],
  github: "micrenda/zsh-nohup",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["nohup.plugin.zsh"],
  },
};

export default plugin;
