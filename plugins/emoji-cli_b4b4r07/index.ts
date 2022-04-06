const plugin: Fig.Plugin = {
  name: "emoji-cli_b4b4r07",
  displayName: "emoji-cli",
  icon: "😱",
  type: "shell",
  description: "Emoji completion on the command line",
  authors: [
    {
      name: "Masaki Ishiyama",
      github: "b4b4r07",
      twitter: "b4b4r07",
    },
  ],
  github: "b4b4r07/emoji-cli",
  shells: ["zsh"],
  screenshots: ["images/logo.gif", "images/smile.png", "images/fzf.png"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["emoji-cli.plugin.zsh"],
    dependencies: [
      { type: "binary", name: "fzf" },
      { type: "binary", name: "jq" },
    ],
  },
  configuration: [
    {
      displayName: "Emoji Dictionary File",
      name: "EMOJI_CLI_DICT",
      type: "environmentVariable",
      description:
        "A path to dictionary of emoji database file. It is written in JSON.",
      interface: "text",
      default: "./dict/emoji.json",
    } as Fig.EnvironmentVariableItemForType<string, "text">,
    {
      displayName: "Filter Executable",
      name: "EMOJI_CLI_FILTER",
      type: "environmentVariable",
      description:
        "The interactive filter command in order to use select emoji. It is separated by colon like the PATH environment variable.",
      interface: "text",
      default: "fzf-tmux -d 15%:fzf:peco:percol",
    },

    {
      displayName: "Keybinding",
      name: "EMOJI_CLI_KEYBIND",
      type: "environmentVariable",
      description: "The key binding to start the input completion for emoji.",
      interface: "text",
      default: "^s",
    },
    {
      displayName: "Insert Emoji",
      name: "EMOJI_CLI_USE_EMOJI",
      type: "environmentVariable",
      description:
        "Should the the widget return the actual emoji or the :emoji: shorthand?",
      interface: "toggle",
      default: false,
      compile: (value) => (value ? "1" : null),
    },
  ],
};

export default plugin;
