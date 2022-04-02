const plugin: Fig.Plugin = {
  name: "zoxide_ajeetdsouza",
  displayName: "zoxide",
  type: "shell",
  description: "A smarter cd command. Supports all major shells.",
  authors: [
    {
      name: "ajeetdsouza",
      github: "ajeetdsouza",
    },
  ],
  github: "ajeetdsouza/zoxide",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "z",
    "command-line",
    "rust",
    "zsh",
    "autojump",
    "bash",
    "powershell",
    "shell",
    "fish",
    "xonsh",
    "xontrib",
    "fzf",
    "fasd",
    "jump",
    "command-line-tool",
    "cli",
    "nushell",
    "elvish",
    "fish-shell",
    "hacktoberfest",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["zoxide.plugin.zsh"],
  },
};

export default plugin;
