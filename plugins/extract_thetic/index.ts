const plugin: Fig.Plugin = {
  icon: "😎",
  name: "extract_thetic",
  type: "shell",
  description: "fork of the oh-my-zsh extract plugin",
  authors: [
    {
      name: "thetic",
      github: "thetic",
    },
  ],
  github: "thetic/extract",
  shells: ["zsh"],
  categories: ["Completion"],
  installation: {
    origin: "github",
    sourceFiles: ["extract.plugin.zsh"],
  },
};

export default plugin;
