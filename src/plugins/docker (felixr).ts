const plugin: Fig.Plugin = {
  name: "docker (felixr)",
  type: "shell",
  description: "zsh completion for docker",
  github: "felixr/docker-zsh-completion",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
