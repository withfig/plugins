const plugin: Fig.Plugin = {
  name: "mvn-contexts",
  type: "shell",
  description: "zsh plugin for quickly switching between maven configuration files",
  github: "artemy/zsh-mvn-contexts",
  shells: ["zsh"],
  tags: [
    "plugin",
    "zsh",
    "settings",
    "maven",
    "zsh-plugin",
    "mvn",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
