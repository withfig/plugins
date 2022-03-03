const plugin: Fig.Plugin = {
  name: "rbenv (elliottcable)",
  type: "shell",
  description: "A faster fork of rbenv.plugin.zsh",
  github: "ELLIOTTCABLE/rbenv.plugin.zsh",
  shells: ["zsh"],
  tags: [
    "ruby",
    "zsh",
    "fast",
    "fork",
    "rbenv",
    "zsh-plugin",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
