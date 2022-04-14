const plugin: Fig.Plugin = {
  icon: "🔥",
  name: "zsh-bd_Tarrasch",
  displayName: "Zsh Bd",
  type: "shell",
  description: "Jump back to a specific directory, without doing `cd ../../..`",
  authors: [
    {
      name: "Tarrasch",
      github: "Tarrasch",
    },
  ],
  github: "Tarrasch/zsh-bd",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["bd.zsh"],
  },
};

export default plugin;
