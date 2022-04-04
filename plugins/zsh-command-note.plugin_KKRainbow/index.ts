const plugin: Fig.Plugin = {
  name: "zsh-command-note.plugin_KKRainbow",
  type: "shell",
  description: "OH-MY-ZSH Plugin: A simple command reminder tool",
  authors: [
    {
      name: "KKRainbow",
      github: "KKRainbow",
    },
  ],
  github: "KKRainbow/zsh-command-note.plugin",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-command-note.plugin.zsh"],
  },
};

export default plugin;
