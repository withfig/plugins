const plugin: Fig.Plugin = {
  name: "dotpyvenv",
  type: "shell",
  description: "A simple oh-my-zsh plugin",
  github: "jeanpantoja/dotpyvenv",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
