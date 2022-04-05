const plugin: Fig.Plugin = {
  icon: "😀",
  name: "zsh-expand_MenkeTechnologies",
  type: "shell",
  authors: [
    {
      name: "MenkeTechnologies",
      github: "MenkeTechnologies",
    },
  ],
  github: "MenkeTechnologies/zsh-expand",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-expand.plugin.zsh"],
  },
};

export default plugin;
