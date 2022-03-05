const plugin: Fig.Plugin = {
  name: "pipenv (AlexGascon)",
  type: "shell",
  description: "Plugin for Oh My Zsh that enables aliases for the most common pipenv commands",
  github: "AlexGascon/pipenv-oh-my-zsh",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
