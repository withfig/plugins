const plugin: Fig.Plugin = {
  icon: "📝",
  name: "zsh-hist_marlonrichert",
  displayName: "Zsh Hist",
  type: "shell",
  description: "Edit your Zsh history from the command line.",
  authors: [
    {
      name: "marlonrichert",
      github: "marlonrichert",
      twitter: "MarlonRichert",
    },
  ],
  github: "marlonrichert/zsh-hist",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Convenience Function"],
  keywords: [
    "zsh",
    "history",
    "history-management",
    "hist",
    "zsh-history",
    "edit",
    "delete",
    "plugin",
    "plugins",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-hist.plugin.zsh"],
  },
  configuration: [
    {
      displayName: "Automatic alias expansion",
      description:
        "zsh-hist can automatically expand your aliases before each command " +
        "line is saved to history.",
      type: "script",
      name: "zsh-hist-expand-aliases",
      interface: "toggle",
      default: false,
      compile: (value) =>
        `zstyle ':hist:*' expand-aliases ${value ? "on" : "off"}`,
    },
    {
      displayName: "Automatic code formatting",
      description:
        "Whenever you finish your command line, `zsh-hist` will " +
        "automatically format it for you, before it is saved to history.",
      type: "script",
      name: "zsh-hist-auto-format",
      interface: "toggle",
      default: true,
      compile: (value) =>
        `zstyle ':hist:*' auto-format ${value ? "on" : "off"}`,
    },
  ],
};

export default plugin;
