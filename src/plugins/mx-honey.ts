const plugin: Fig.Plugin = {
  name: "mx-honey",
  type: "shell",
  description: "🍯 sweet (zsh) completions for mx",
  github: "mukel/mx-honey",
  shells: ["zsh"],
  tags: [
    "plugin",
    "zsh",
    "graalvm",
    "graal",
    "mx",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
