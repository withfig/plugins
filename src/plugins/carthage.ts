const plugin: Fig.Plugin = {
  name: "carthage",
  type: "shell",
  description: "A very, very tiny Carthage plugin for zsh.",
  github: "squarefrog/zsh-carthage",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
