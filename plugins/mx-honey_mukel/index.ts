const plugin: Fig.Plugin = {
  icon: "🍯",
  name: "mx-honey_mukel",
  displayName: "Mx Honey",
  type: "shell",
  description: "Sweet (zsh) completions for mx",
  authors: [
    {
      name: "mukel",
      github: "mukel",
    },
  ],
  github: "mukel/mx-honey",
  license: ["Apache-2.0"],
  site: "https://github.com/graalvm/mx",
  shells: ["zsh"],
  categories: ["Completion"],
  keywords: ["mx", "zsh", "plugin", "graal", "graalvm"],
  installation: {
    origin: "github",
    sourceFiles: ["mx.plugin.zsh"],
  },
};

export default plugin;
