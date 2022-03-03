const plugin: Fig.Plugin = {
  name: "gvm (yerinle)",
  type: "shell",
  description: "a gvm plugin for oh my zsh",
  github: "yerinle/zsh-gvm",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
