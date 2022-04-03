const plugin: Fig.Plugin = {
  name: "print-alias_brymck",
  type: "shell",
  description: "A Zsh plugin for printing expanded aliases",
  authors: [
    {
      name: "brymck",
      github: "brymck",
    },
  ],
  github: "brymck/print-alias",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["print-alias.plugin.zsh"],
  },
};

export default plugin;
