const plugin: Fig.Plugin = {
  name: "ubuntualiases",
  type: "shell",
  description: "Ubuntu 16 aliases plugin for antigen",
  github: "GuilleDF/zsh-ubuntualiases",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
