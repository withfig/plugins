const plugin: Fig.Plugin = {
  name: "zsh-you-should-use_MichaelAquilina",
  displayName: "You Should Use",
  icon: "📎",
  type: "shell",
  description:
    "ZSH plugin that reminds you to use existing aliases for commands you just typed",
  authors: [
    {
      name: "MichaelAquilina",
      github: "MichaelAquilina",
    },
  ],
  github: "MichaelAquilina/zsh-you-should-use",
  license: ["GPL-3.0"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "zsh",
    "zsh-plugin",
    "aliases",
    "productivity",
    "alias",
    "reminders",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["you-should-use.plugin.zsh"],
  },
  configuration: [
    {
      displayName: "Reminder Display Position",
      description: "Should the reminder display before or after the command",
      default: "before",
      type: "environmentVariable",
      environmentVariable: "YSU_MESSAGE_POSITION",
      interface: "select",
      options: ["before", "after"],
    },
    {
      displayName: "Displaying Results",
      description: "Which alias(es) should it display",
      default: "BESTMATCH",
      type: "environmentVariable",
      environmentVariable: "YSU_MODE",
      interface: "select",
      options: ["BESTMATCH", "ALL"],
    },
    {
      displayName: "Message Format",
      description: "The message displayed when the env variable is found",
      default: "",
      additionalDetails:
        "%alias_type - the type of alias detected (alias, git alias, global alias); %command - the command that was typed by the user; %alias - the matching alias that was found",
      type: "environmentVariable",
      environmentVariable: "YSU_MESSAGE_FORMAT",
      interface: "text",
    },
    {
      displayName: "Hardcore Mode",
      description: "Prevent a command from executing if you don't use an alias",
      default: false,
      type: "environmentVariable",
      environmentVariable: "YSU_HARDCORE",
      interface: "toggle",
    },
    {
      displayName: "Disable hints for Specific Aliases",
      description: "An array of aliases you want to ignore",
      default: "",
      type: "environmentVariable",
      environmentVariable: "YSU_IGNORED_ALIASES",
      interface: "multitext",
    },
    {
      displayName: "Disable hints for Speific Global Aliases",
      description: "An array of global aliases you want to ignore",
      default: "",
      type: "environmentVariable",
      environmentVariable: "YSU_IGNORED_GLOBAL_ALIASES",
      interface: "multitext",
    },
  ],
};

export default plugin;
