const plugin: Fig.Plugin = {
  name: "pipenv_gangleri",
  type: "shell",
  description: "pipenv plugin for oh-my-zsh",
  authors: [
    {
      name: "gangleri",
      github: "gangleri",
    }
  ],
  github: "gangleri/pipenv",
  shells: ["zsh"],
  categories: ["Compleation"],
  keywords: [
    "oh-my-zsh-plugin",
    "pipenv",
    "python",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["pipenv.plugin.zsh"],
  },
};

export default plugin;
