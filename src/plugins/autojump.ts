const plugin: Fig.Plugin = {
  name: "autojump",
  type: "shell",
  description: "A cd command that learns - easily navigate directories from the command line",
  github: "wting/autojump",
  shells: ["zsh"],
  tags: [
    "python",
    "filesystem",
    "command-line-tool",
    "autojump",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
