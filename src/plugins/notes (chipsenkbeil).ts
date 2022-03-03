const plugin: Fig.Plugin = {
  name: "notes (chipsenkbeil)",
  type: "shell",
  description: "Plugin extracted from my zshrc to provide a quick notes editing experience in zsh.",
  github: "chipsenkbeil/zsh-notes",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
