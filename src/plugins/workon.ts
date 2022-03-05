const plugin: Fig.Plugin = {
  name: "workon",
  type: "shell",
  description: "Lightly simple utility to jump between projects.",
  github: "bryanculver/opus.plugin.zsh",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
