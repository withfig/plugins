const plugin: Fig.Plugin = {
  name: "pipenv (gangleri)",
  type: "shell",
  description: "pipenv plugin for oh-my-zsh",
  github: "gangleri/pipenv",
  shells: ["zsh"],
  tags: [
    "python",
    "oh-my-zsh-plugin",
    "pipenv",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
