const plugin: Fig.Plugin = {
  name: "up (cjayross)",
  type: "shell",
  description: "zsh plugin that offers a simple way to navigate up through directories",
  github: "cjayross/up",
  shells: ["zsh"],
  tags: [
    "zsh",
    "command-line",
    "zsh-plugin",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
