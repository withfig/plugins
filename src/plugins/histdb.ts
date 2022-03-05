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
    origin: "github",
  },
};

export default plugin;
