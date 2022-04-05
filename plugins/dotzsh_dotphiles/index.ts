const plugin: Fig.Plugin = {
  icon: "⭐️",
  name: "dotzsh_dotphiles",
  type: "shell",
  description: "A community driven framework for zsh",
  authors: [
    {
      name: "dotphiles",
      github: "dotphiles",
    },
  ],
  github: "dotphiles/dotzsh",
  shells: ["zsh"],
  categories: ["Framework"],
  installation: {
    origin: "github",
    sourceFiles: ["env.zsh", "helper.zsh", "init.zsh"],
  },
};

export default plugin;
