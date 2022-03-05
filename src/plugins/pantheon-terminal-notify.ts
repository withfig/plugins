const plugin: Fig.Plugin = {
  name: "pantheon-terminal-notify",
  type: "shell",
  description: "background notifications for long running commands! Supports Elementary OS Freya.",
  github: "deyvisonrocha/pantheon-terminal-notify-zsh-plugin",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
