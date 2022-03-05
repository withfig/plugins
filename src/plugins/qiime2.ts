const plugin: Fig.Plugin = {
  name: "qiime2",
  type: "shell",
  description: "Small Oh-My-Zsh plugin for QIIME 2 users and developers.",
  github: "misialq/zsh-qiime2",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
