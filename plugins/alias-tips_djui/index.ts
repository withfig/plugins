const plugin: Fig.Plugin = {
  name: "alias-tips_djui",
  displayName: "Alias Tips",
  icon: "💡",
  type: "shell",
  description:
    "An oh-my-zsh plugin to help remembering those aliases you defined once",
  screenshots: ["images/1.png", "images/2.png"],
  authors: [
    {
      name: "djui",
      github: "djui",
    },
  ],
  github: "djui/alias-tips",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["alias-tips.plugin.zsh"],
  },
  configuration: [
    {
      displayName: "Output",
      type: "environmentVariable",
      description:
        "The help string can be configured exporting an environment variable",
      interface: "text",
      default: "",
      name: "ZSH_PLUGINS_ALIAS_TIPS_TEXT",
    },
    {
      displayName: "Exclude some Aliases",
      type: "environmentVariable",
      description:
        "A list of aliases to be excluded from being reminded of can be configured exporting an environment variable of space separated aliases",
      interface: "text",
      default: "",
      name: "ZSH_PLUGINS_ALIAS_TIPS_EXCLUDES",
    },
    {
      displayName: "Disable Command Expansion",
      type: "environmentVariable",
      description:
        "If you have several alias, e.g. for different git commands the command get expanded before looking for an alias.",
      name: "ZSH_PLUGINS_ALIAS_TIPS_EXPAND",
      default: true,
      interface: "toggle",
    },
    {
      displayName: "Force Alias Use",
      type: "environmentVariable",
      description:
        "If you want to force yourself to use the aliases you set you can enable this option through this environmental variable",
      name: "ZSH_PLUGINS_ALIAS_TIPS_FORCE",
      default: false,
      interface: "toggle",
    },
    {
      displayName: "Reveal Command",
      type: "environmentVariable",
      description:
        "If you want to reveal aliased command, e.g. to demonstrate your shell to someone else you can enable this option through this environmental variable",
      name: "ZSH_PLUGINS_ALIAS_TIPS_REVEAL",
      default: false,
      interface: "toggle",
    },
    {
      displayName: "Reveal Command",
      type: "environmentVariable",
      description: "Use this environmental variable to customize text",
      interface: "text",
      default: "",
      name: "ZSH_PLUGINS_ALIAS_TIPS_REVEAL_TEXT",
    },
    {
      displayName: "Reveal Command",
      type: "environmentVariable",
      description: "And this to exclude some obvious expansions",
      interface: "text",
      default: "",
      name: "ZSH_PLUGINS_ALIAS_TIPS_REVEAL_EXCLUDES",
    },
  ],
};

export default plugin;
