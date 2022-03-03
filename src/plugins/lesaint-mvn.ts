const plugin: Fig.Plugin = {
  name: "lesaint-mvn",
  type: "shell",
  description: "My Zsh plugin for Maven",
  github: "lesaint/lesaint-mvn",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
