const plugin: Fig.Plugin = {
  name: "ripz",
  type: "shell",
  description: "💡 ripgrep-powered zsh plugin alias reminder",
  github: "jedahan/ripz",
  shells: ["zsh"],
  tags: [
    "zsh",
    "aliases",
    "zsh-plugin",
    "ripgrep",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
