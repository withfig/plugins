const plugin: Fig.Plugin = {
  name: "rancher-zsh-completion",
  type: "shell",
  description: "zsh completion for Rancher CLI",
  github: "go/rancher-zsh-completion",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
