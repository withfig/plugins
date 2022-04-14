const plugin: Fig.Plugin = {
  name: "jq-zsh-plugin",
  displayName: "Jq Zsh Plugin",
  icon: "📃",
  type: "shell",
  description: "jq zsh plugin",
  authors: [
    {
      name: "reegnz",
      github: "reegnz",
      twitter: "zoltanreegn",
    },
  ],
  github: "reegnz/jq-zsh-plugin",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Productivity Hack"],
  keywords: ["zsh", "zsh-plugin", "zshell", "jq", "cli", "shell", "fzf"],
  installation: {
    origin: "github",
    sourceFiles: ["jq.plugin.zsh"],
    dependencies: [
      {
        type: "binary",
        name: "jq",
      },
      {
        type: "binary",
        name: "fzf",
      },
    ],
  },
  configuration: [
    {
      displayName: "Expand Aliases",
      description:
        "Automatically expands shell aliases in a command before passing it to `jq-repl`",
      name: "JQ_ZSH_PLUGIN_EXPAND_ALIASES",
      type: "environmentVariable",
      interface: "toggle",
      default: true,
    },
  ],
};

export default plugin;
