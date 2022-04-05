const plugin: Fig.Plugin = {
  icon: "⚡️",
  name: "pipenv.zsh_owenstranathan",
  type: "shell",
  description: "a zsh plugin for pipenv",
  authors: [
    {
      name: "owenstranathan",
      github: "owenstranathan",
    },
  ],
  github: "owenstranathan/pipenv.zsh",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Completion"],
  installation: {
    origin: "github",
    sourceFiles: ["pipenv.plugin.zsh"],
  },
};

export default plugin;
