const plugin: Fig.Plugin = {
  icon: "💾",
  name: "pip-app_sharat87",
  displayName: "Pip App",
  type: "shell",
  description:
    "A set of shell functions to make it easy to install small apps and utilities distributed with pip.",
  authors: [
    {
      name: "sharat87",
      github: "sharat87",
    },
  ],
  github: "sharat87/pip-app",
  shells: ["bash", "zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["pip-app.sh"],
    },
    zsh: {
      sourceFiles: ["pip-app.sh"],
    },
  },
};

export default plugin;
