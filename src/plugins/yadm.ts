const plugin: Fig.Plugin = {
  name: "yadm",
  type: "shell",
  description: "yadm zsh plugin",
  github: "juanrgon/yadm-zsh",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
