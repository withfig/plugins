const plugin: Fig.Plugin = {
  name: "oh-my-matrix",
  type: "shell",
  description: "oh-my-zsh plugin. Turns your terminal into the Matrix just for fun",
  github: "amstrad/oh-my-matrix",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
