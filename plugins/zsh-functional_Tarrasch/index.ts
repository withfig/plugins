const plugin: Fig.Plugin = {
  name: "zsh-functional_Tarrasch",
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
  categories: ["Other"],
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
