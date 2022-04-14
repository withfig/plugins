const plugin: Fig.Plugin = {
  icon: "👾",
  name: "zsh-functional_Tarrasch",
  displayName: "Zsh Functional",
  type: "shell",
  description: "Higher order functions for zsh",
  authors: [
    {
      name: "Tarrasch",
      github: "Tarrasch",
    },
  ],
  github: "Tarrasch/zsh-functional",
  shells: ["bash", "zsh"],
  categories: ["Convenience Function"],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["install.sh"],
    },
    zsh: {
      sourceFiles: ["functional.plugin.zsh"],
    },
  },
};

export default plugin;
