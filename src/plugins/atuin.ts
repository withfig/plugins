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
    origin: "github",
  },
};

export default plugin;
