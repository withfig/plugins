const plugin: Fig.Plugin = {
  name: "emoji-fzf",
  type: "shell",
  description: "ZSH plugin for emoji-fzf",
  github: "pschmitt/emoji-fzf.zsh",
  shells: ["zsh"],
  tags: [
    "python",
    "emoji",
    "zsh",
    "cli",
    "fzf",
    "fuzzy",
    "emoji-cli",
    "zinit",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
