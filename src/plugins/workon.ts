const plugin: Fig.Plugin = {
  name: "workon",
  type: "shell",
  description: "Lightly simple utility to jump between projects.",
  github: "bryanculver/opus.plugin.zsh",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
