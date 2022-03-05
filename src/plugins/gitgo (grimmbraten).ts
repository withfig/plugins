const plugin: Fig.Plugin = {
  name: "gitgo (grimmbraten)",
  type: "shell",
  description: "A zsh plugin to go between git branches with ease",
  github: "grimmbraten/gitgo",
  shells: ["zsh"],
  tags: [
    "plugin",
    "git",
    "zsh",
    "cli",
    "fzf",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
