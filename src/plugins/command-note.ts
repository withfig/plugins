const plugin: Fig.Plugin = {
  name: "command-note",
  type: "shell",
  description: "OH-MY-ZSH Plugin: A simple command reminder tool",
  github: "KKRainbow/zsh-command-note.plugin",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
