const plugin: Fig.Plugin = {
  name: "wd",
  type: "shell",
  description: "🚀 Jump to custom directories in zsh",
  github: "mfaerevaag/wd",
  shells: ["zsh"],
  tags: [
    "shell",
    "zsh",
    "productivity",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
