// const colors = [
//   "black",
//   "red",
//   "green",
//   "yellow",
//   "blue",
//   "magenta",
//   "cyan",
//   "white",
//   ...new Array(256).fill(null).map((_, i) => `${i}`),
// ];

const booleanCompile = (value: boolean) => (value ? "true" : "false");

const plugin: Fig.Plugin = {
  name: "starship",
  displayName: "Starship",
  type: "shell",
  description:
    "The minimal, blazing-fast, and infinitely customizable prompt for any shell!",
  icon: "🌌️",
  site: "https://starship.rs/",
  docs: "https://starship.rs/guide/",
  github: "starship/starship",
  twitter: "StarshipPrompt",
  license: ["ISC"],
  authors: [
    { name: "Matan Kushner", twitter: "@matchai", github: "matchai" },
    { name: "Phil Brocker", github: "pbr0ck3r" },
  ],
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: [
    "zsh",
    "zsh-users",
    "prompt",
    "oh-my-zsh",
    "zsh-theme",
    "shell",
    "starship",
    "shell-prompt",
    "terminal",
    "shell-theme",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["$HOME/.config/starship.toml"],
    onInstall: {
      command: [
        "curl -sS https://starship.rs/install.sh | sh -s -- --yes --bin-dir=$HOME/.local/bin",
      ],
      check: {
        commandExists: ["starship"],
        commandOutput: [
          {
            command: "starship module character",
            output: "[1;32m❯[0m ",
          },
        ],
      },
    },
    onUninstall: {
      file: ["$HOME/.local/bin/starship"],
    },
    bash: {
      postScript: 'eval "$(starship init bash)"',
    },
    fish: {
      postScript: "starship init fish | source",
    },
    zsh: {
      postScript: 'eval "$(starship init zsh)"',
    },
  },
  configuration: [
    {
      displayName: "Prompt",
      configuration: [
        {
          displayName: "Format",
          description: "Configure the format of the prompt.",
          type: "environmentVariable",
          name: "format",
          interface: "textarea",
          default: "$all",
        },
        {
          displayName: "Right Format",
          description:
            "Currently supported for the following shells: elvish, fish, zsh, xonsh, cmd, nushell.",
          type: "environmentVariable",
          name: "right_format",
          interface: "toggle",
          default: false,
          compile: booleanCompile,
        },
        {
          displayName: "Scan Timeout",
          description: "Timeout for starship to scan files (in milliseconds).",
          type: "environmentVariable",
          name: "scan_timeout",
          interface: "text",
          default: "30",
        },
        {
          displayName: "Commmand Timeout",
          description:
            "Timeout for commands executed by starship (in milliseconds).",
          type: "environmentVariable",
          name: "command_timeout",
          interface: "text",
          default: "500",
        },
        {
          displayName: "Add Newline",
          description: "Inserts blank line between shell prompts.",
          type: "environmentVariable",
          name: "add_newline",
          interface: "toggle",
          default: false,
          compile: booleanCompile,
        },
        {
          displayName: "Palette",
          description: "Sets which color palette from `palettes` to use.",
          type: "environmentVariable",
          name: "palette",
          interface: "text",
          default: "",
        },
        {
          displayName: "Palettes",
          description:
            "Collection of color palettes that assign colors to user-defined names. Note that color palettes cannot reference their own color definitions.",
          type: "environmentVariable",
          name: "palettes",
          interface: "textarea",
          default: "{}",
        },
      ],
    },
  ],
};

export default plugin;
