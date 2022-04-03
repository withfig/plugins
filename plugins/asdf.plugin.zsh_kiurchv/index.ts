const plugin: Fig.Plugin = {
  name: "asdf.plugin.zsh_kiurchv",
  type: "shell",
  description: "Zsh integration and completions for asdf",
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
