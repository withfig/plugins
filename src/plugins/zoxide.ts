const plugin: Fig.Plugin = {
  name: "zoxide",
  type: "shell",
  description: "A smarter cd command. Supports all major shells.",
  github: "ajeetdsouza/zoxide",
  shells: ["zsh"],
  tags: [
    "shell",
    "bash",
    "rust",
    "zsh",
    "cli",
    "fish",
    "command-line",
    "powershell",
    "fzf",
    "fish-shell",
    "command-line-tool",
    "autojump",
    "fasd",
    "hacktoberfest",
    "jump",
    "z",
    "xonsh",
    "elvish",
    "xontrib",
    "nushell",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
