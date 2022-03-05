const plugin: Fig.Plugin = {
  name: "poetry (sudosabin)",
  type: "shell",
  description: "Zsh poetry plugin to activate PATH and autocompletions.",
  github: "sudosubin/zsh-poetry",
  shells: ["zsh"],
  tags: [
    "zsh",
    "poetry",
    "zsh-plugin",
    "zsh-plugins",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
