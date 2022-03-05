const plugin: Fig.Plugin = {
  name: "yeoman",
  type: "shell",
  description: "Yeoman plugin for Oh My ZSH, compatible with yeoman version ≥1.0 (options and command auto-completion).",
  github: "edouard-lopez/yeoman-zsh-plugin",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
