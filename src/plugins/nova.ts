const plugin: Fig.Plugin = {
  name: "nova",
  type: "shell",
  description: "oh-my-zsh Plugin for python-novaclient",
  github: "rbirnie/oh-my-zsh-nova",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
