const plugin: Fig.Plugin = {
  name: "terraform (thuandt)",
  type: "shell",
  description: "zsh terraform plugin",
  github: "thuandt/zsh-terraform",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
