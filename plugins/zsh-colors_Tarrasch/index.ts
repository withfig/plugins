const plugin: Fig.Plugin = {
  name: "zsh-colors_Tarrasch",
  type: "shell",
  description: "Imagine a shell where `red ERROR` just works",
  authors: [
    {
      name: "Tarrasch",
      github: "Tarrasch",
    },
  ],
  github: "Tarrasch/zsh-colors",
  license: ["GPL-3.0"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["colors.plugin.zsh"],
  },
};

export default plugin;
