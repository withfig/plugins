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
    source: "github",
  },
};

export default plugin;
