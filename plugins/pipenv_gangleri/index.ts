const plugin: Fig.Plugin = {
  icon: "☀️",
  name: "pipenv_gangleri",
  displayName: "Pipenv (gangleri)",
  type: "shell",
  description: "pipenv plugin for oh-my-zsh",
  authors: [
    {
      name: "gangleri",
      github: "gangleri",
    },
  ],
  github: "gangleri/pipenv",
  shells: ["zsh"],
  categories: ["Completion"],
  keywords: ["oh-my-zsh-plugin", "pipenv", "python"],
  installation: {
    origin: "github",
    sourceFiles: ["pipenv.plugin.zsh"],
  },
};

export default plugin;
