const plugin: Fig.Plugin = {
  name: "pip-app",
  type: "shell",
  description: "A set of shell functions to make it easy to install small apps and utilities distributed with pip.",
  github: "sharat87/pip-app",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
