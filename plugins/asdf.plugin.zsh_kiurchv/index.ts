const plugin: Fig.Plugin = {
  name: "asdf.plugin.zsh_kiurchv",
  displayName: "Asdf Plugin for Zsh",
  description: "Zsh integration and completions for asdf",
  icon: "👾",
  type: "shell",
  authors: [
    {
      name: "kiurchv",
      github: "kiurchv",
    },
  ],
  github: "kiurchv/asdf.plugin.zsh",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["asdf.plugin.zsh"],
  },
};

export default plugin;
