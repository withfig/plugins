const plugin: Fig.Plugin = {
  name: "kitty",
  type: "shell",
  description: "A zsh plugin that provides completions for the kitty terminal emulator.",
  github: "redxtech/zsh-kitty",
  shells: ["zsh"],
  tags: [
    "zsh",
    "zsh-plugin",
    "completions",
    "kitty",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
