const plugin: Fig.Plugin = {
  name: "rancher-zsh-completion",
  type: "shell",
  description: "zsh completion for Rancher CLI",
  github: "go/rancher-zsh-completion",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
