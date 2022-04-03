const plugin: Fig.Plugin = {
  name: "mx-honey_mukel",
  type: "shell",
  description: ":honey_pot: sweet (zsh) completions for mx",
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
