const plugin: Fig.Plugin = {
  name: "zsh-cargo-completion_MenkeTechnologies",
  type: "shell",
  authors: [
    {
      name: "MenkeTechnologies",
      github: "MenkeTechnologies",
    },
  ],
  github: "MenkeTechnologies/zsh-cargo-completion",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Completion"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-cargo-completion.plugin.zsh"],
  },
};

export default plugin;
