const plugin: Fig.Plugin = {
  name: "pumice_ryutamaki",
  type: "shell",
  description: "Light weight plugin manager for zsh",
  authors: [
    {
      name: "ryutamaki",
      github: "ryutamaki",
    },
  ],
  github: "ryutamaki/pumice",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Framework"],
  keywords: ["shell", "package-manager", "zsh"],
  installation: {
    origin: "github",
    sourceFiles: ["pumice.zsh"],
  },
};

export default plugin;
