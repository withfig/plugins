const plugin: Fig.Plugin = {
  icon: "👾",
  name: "minimal_subnixr",
  type: "shell",
  description: "A minimal zsh theme",
  authors: [
    {
      name: "subnixr",
      github: "subnixr",
    },
  ],
  github: "subnixr/minimal",
  license: ["GPL-3.0"],
  shells: ["zsh"],
  categories: ["Prompt"],
  installation: {
    origin: "github",
    sourceFiles: ["minimal.zsh"],
  },
};

export default plugin;
