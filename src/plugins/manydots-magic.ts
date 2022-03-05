const plugin: Fig.Plugin = {
  name: "manydots-magic",
  type: "shell",
  description: "manydots-magic - zle tweak for emulating `...'==`../..' etc.",
  github: "knu/zsh-manydots-magic",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
