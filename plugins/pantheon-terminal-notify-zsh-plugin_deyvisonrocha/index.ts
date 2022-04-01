const plugin: Fig.Plugin = {
  name: "pantheon-terminal-notify-zsh-plugin_deyvisonrocha",
  type: "shell",
  description: "background notifications for long running commands! Supports Elementary OS Freya.",
  authors: [
    {
      name: "deyvisonrocha",
      github: "deyvisonrocha",
      twitter: "deyvisonrocha",
    }
  ],
  github: "deyvisonrocha/pantheon-terminal-notify-zsh-plugin",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["pantheon-terminal-notify.plugin.zsh"],
  },
};

export default plugin;
