const plugin: Fig.Plugin = {
  name: "docker-zsh-completion_felixr",
  type: "shell",
  description: "zsh completion for docker",
  authors: [
    {
      name: "felixr",
      github: "felixr",
    },
  ],
  github: "felixr/docker-zsh-completion",
  shells: ["zsh"],
  categories: ["Completion"],
  installation: {
    origin: "github",
    sourceFiles: ["docker-zsh-completion.plugin.zsh"],
  },
};

export default plugin;
