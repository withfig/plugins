const plugin: Fig.Plugin = {
  name: "smartinput",
  type: "shell",
  description: "This is a zsh plugin to provided smart input.",
  github: "momo-lab/zsh-smartinput",
  shells: ["zsh"],
  tags: [
    "zsh",
    "zsh-plugin",
    "zsh-plugins",
    "zle-widgets",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
