const plugin: Fig.Plugin = {
  icon: "⌨️",
  name: "fzf-marks_urbainvaes",
  displayName: "Fzf Marks",
  type: "shell",
  description: "Plugin to manage bookmarks in bash and zsh",
  authors: [
    {
      name: "urbainvaes",
      github: "urbainvaes",
    },
  ],
  github: "urbainvaes/fzf-marks",
  license: ["MIT"],
  shells: ["bash", "zsh"],
  categories: ["Other"],
  keywords: ["fzf", "zsh-plugin", "shell-script", "bookmarks"],
  installation: {
    origin: "github",
    dependencies: [
      {
        name: "fzf",
        type: "binary",
      },
    ],
    bash: {
      sourceFiles: ["fzf-marks.plugin.bash"],
    },
    zsh: {
      preScript: "autoload -Uz compinit && compinit",
      sourceFiles: ["fzf-marks.plugin.zsh"],
    },
  },
  configuration: [
    {
      displayName: "Marks file",
      type: "environmentVariable",
      name: "FZF_MARKS_FILE",
      description: "File containing the marks data",
      interface: "text",
      default: "${HOME}/.fzf-marks",
    },
    {
      displayName: "Command",
      type: "environmentVariable",
      name: "FZF_MARKS_COMMAND",
      description: "Command used to call `fzf`",
      interface: "text",
      default: "fzf --height 40% --reverse",
    },
    {
      displayName: "`fzm` Keybinding",
      type: "environmentVariable",
      name: "FZF_MARKS_JUMP",
      description: "Keybinding to `fzm`",
      interface: "text",
      default: "^g",
    },
    {
      displayName: "Disable Color",
      type: "environmentVariable",
      name: "FZF_MARKS_NO_COLORS",
      description: "Disable colors",
      interface: "toggle",
      default: false,
    },
    {
      displayName: "Keep Marks Order",
      type: "environmentVariable",
      name: "FZF_MARKS_KEEP_ORDER",
      description: "Keep order of marks",
      interface: "toggle",
      default: false,
    },
    {
      displayName: "Left Color",
      type: "environmentVariable",
      name: "FZF_MARKS_COLOR_LHS",
      description: "ANSI color code of left-hand side",
      interface: "text",
      default: 39,
    },
    {
      displayName: "Right Color",
      type: "environmentVariable",
      name: "FZF_MARKS_COLOR_RHS",
      description: "ANSI color code of right-hand side",
      interface: "text",
      default: 36,
    },
    {
      displayName: "Separator Color",
      type: "environmentVariable",
      name: "FZF_MARKS_COLOR_COLON",
      description: "ANSI color code of separator",
      interface: "text",
      default: 33,
    },
  ],
};

export default plugin;
