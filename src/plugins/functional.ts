const plugin: Fig.Plugin = {
  name: "functional",
  type: "shell",
  description: "Higher order functions for zsh",
  github: "Tarrasch/zsh-functional",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
