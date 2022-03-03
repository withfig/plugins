const plugin: Fig.Plugin = {
  name: "hanami",
  type: "shell",
  description: "Zsh plugin for hanami.",
  github: "davydovanton/hanami-zsh",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
