const plugin: Fig.Plugin = {
  icon: "🧑‍💻",
  name: "antigen-hs_Tarrasch",
  type: "shell",
  description: "A fast zsh plugin manager",
  authors: [
    {
      name: "Tarrasch",
      github: "Tarrasch",
    },
  ],
  github: "Tarrasch/antigen-hs",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Framework"],
  installation: {
    origin: "github",
    sourceFiles: ["init.zsh"],
  },
};

export default plugin;
