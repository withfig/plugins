const plugin: Fig.Plugin = {
  name: "atuin",
  type: "shell",
  description: "🐢 Magical shell history",
  github: "ellie/atuin",
  shells: ["zsh"],
  tags: [
    "shell",
    "rust",
    "zsh",
    "history",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
