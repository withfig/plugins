const plugin: Fig.Plugin = {
  name: "quotify",
  type: "shell",
  description: "An oh-my-zsh plugin printing coding quotes on startup",
  github: "dpretet/zsh-quotify",
  shells: ["zsh"],
  tags: [
    "plugin",
    "shell",
    "quotes",
    "zsh",
    "oh-my-zsh",
    "philosophy",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
