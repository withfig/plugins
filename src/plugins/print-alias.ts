const plugin: Fig.Plugin = {
  name: "print-alias",
  type: "shell",
  description: "A Zsh plugin for printing expanded aliases",
  github: "brymck/print-alias",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
