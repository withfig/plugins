const plugin: Fig.Plugin = {
  name: "gumsible",
  type: "shell",
  description: "GumGum Ansible / Molecule wrapper plugin for oh-my-zsh",
  github: "Lowess/gumsible-oh-my-zsh-plugin",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
