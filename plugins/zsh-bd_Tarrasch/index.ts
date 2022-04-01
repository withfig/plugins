const plugin: Fig.Plugin = {
  name: "zsh-bd_Tarrasch",
  type: "shell",
  description: "Jump back to a specific directory, without doing `cd ../../..`",
  authors: [
    {
      name: "Tarrasch",
      github: "Tarrasch",
    }
  ],
  github: "Tarrasch/zsh-bd",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["bd.plugin.zsh"],
  },
};

export default plugin;
