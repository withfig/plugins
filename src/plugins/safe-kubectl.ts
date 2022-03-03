const plugin: Fig.Plugin = {
  name: "safe-kubectl",
  type: "shell",
  description: "Oh my zsh plugin to make kubectl commands a bit safer",
  github: "benjefferies/safe-kubectl",
  shells: ["zsh"],
  tags: [
    "plugin",
    "zsh",
    "kubectl",
    "zsh-plugin",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
