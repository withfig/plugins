const plugin: Fig.Plugin = {
  name: "pip-env",
  type: "shell",
  description: "A Zsh plugin that automatically activates the Pipenv subshell.",
  github: "tjquillan/zsh-pipenv",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
