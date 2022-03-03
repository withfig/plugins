const plugin: Fig.Plugin = {
  name: "histdb",
  type: "shell",
  description: "A slightly better history for zsh",
  github: "larkery/zsh-histdb",
  shells: ["zsh"],
  tags: [
    "zsh",
    "history",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
