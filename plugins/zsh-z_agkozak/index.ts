const plugin: Fig.Plugin = {
  icon: "🔥",
  name: "zsh-z_agkozak",
  displayName: "zsh-z",
  type: "shell",
  description:
    'Jump quickly to directories that you have visited "frecently." A native Zsh port of z.sh.',
  authors: [
    {
      name: "agkozak",
      github: "agkozak",
      twitter: "agkozak",
    },
  ],
  github: "agkozak/zsh-z",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "autojump",
    "zsh",
    "zsh-plugin",
    "filesystem",
    "command-line-tool",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-z.plugin.zsh"],
  },
  configuration: [
    {
      name: "Command",
      description: "Change the command name",
      type: "environmentVariable",
      environmentVariable: "ZSHZ_CMD",
      interface: "text",
      default: "z",
    },
    {
      name: "Sort Order",
      description: "Change the sort order",
      type: "environmentVariable",
      environmentVariable: "ZSHZ_COMPLETION",
      interface: "select",
      default: "frecent",
      options: [
        { option: "frecent", description: "Most Frequently Used" },
        { option: "legacy", description: "Alphabetically" },
      ],
    },
    {
      name: "Database File",
      description: "Change the database file",
      type: "environmentVariable",
      environmentVariable: "ZSHZ_DATA",
      interface: "text",
      default: "~/.z",
    },
    {
      name: "Echo",
      description: "Displays the new path name when changing directories",
      type: "environmentVariable",
      environmentVariable: "ZSHZ_ECHO",
      interface: "text",
      default: 0,
    },
    {
      name: "Exclude Directories",
      description: "A list of directories to keep out of the database",
      type: "environmentVariable",
      environmentVariable: "ZSHZ_EXCLUDE_DIRS",
      interface: "multi-text",
      default: [],
    },
    {
      name: "Keep Directories",
      description:
        "A list of directories that should not be removed from the database, " +
        "even if they are not currently available.",
      additionalDetails: "Useful when a drive is not always mounted.",
      type: "environmentVariable",
      environmentVariable: "ZSHZ_KEEP_DIRS",
      interface: "multi-text",
      default: [],
    },
    {
      name: "Max Score",
      description:
        "The maximum combined score the database entries can have " +
        "before they begin to age and potentially drop out of the database",
      type: "environmentVariable",
      environmentVariable: "ZSHZ_MAX_SCORE",
      interface: "text",
      default: 9000,
    },
    {
      name: "Follow Symbolic Links",
      description: "Follow symbolic links when changing directories",
      type: "environmentVariable",
      environmentVariable: "ZSHZ_NO_RESOLVE_SYMLINKS",
      interface: "toggle",
      default: true,
      compile: (value) => (value ? "0" : "1"),
    },
    {
      name: "Home Directory as Tilde",
      description: "Displays the name of the `HOME` directory as a `~`.",
      type: "environmentVariable",
      environmentVariable: "ZSHZ_TILDE",
      interface: "toggle",
      default: false,
    },
    {
      name: "Trailing Slash",
      description:
        "makes it so that a search pattern ending in `/` can match the final " +
        "element in a path; e.g., `z foo/` can match `/path/to/foo`",
      type: "environmentVariable",
      environmentVariable: "ZSHZ_TRAILING_SLASH",
      interface: "toggle",
      default: false,
    },
    {
      name: "Uncommon",
      type: "environmentVariable",
      environmentVariable: "ZSHZ_UNCOMMON",
      interface: "toggle",
      default: false,
      compile: (value) => (value ? "1" : "0"),
    },
    {
      name: "Case Sensitivity",
      description: "Make the search case sensitive",
      additionalDetails:
        "If you like Vim's `smartcase` setting, where lowercase patterns are " +
        "case-insensitive while patterns with any uppercase characters are " +
        "treated case-sensitively, try `smart`.",
      type: "environmentVariable",
      environmentVariable: "ZSHZ_CASE",
      interface: "select",
      default: "sensitive",
      options: [
        {
          option: "mostly-sensitive",
          description: "Try to find a case sensitive match",
        },
        { option: "ignore", description: "Case Insensitive" },
        { option: "smart", description: "Smart Case" },
      ],
    },
  ],
};

export default plugin;
