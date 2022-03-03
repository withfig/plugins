const plugin: Fig.Plugin = {
  name: "docker (felixr)",
  type: "shell",
  description: "zsh completion for docker",
  github: "felixr/docker-zsh-completion",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
