const plugin: Fig.Plugin = {
  icon: "⭐️",
  name: "oh-my-matrix_amstrad",
  displayName: "Oh My Matrix",
  type: "shell",
  description:
    "oh-my-zsh plugin. Turns your terminal into the Matrix just for fun ",
  authors: [
    {
      name: "amstrad",
      github: "amstrad",
    },
  ],
  github: "amstrad/oh-my-matrix",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["oh-my-matrix.plugin.zsh"],
  },
};

export default plugin;
