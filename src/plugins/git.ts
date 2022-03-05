const plugin: Fig.Plugin = {
  name: "git",
  type: "shell",
  description: "Custom oh-my-zsh git plugin",
  github: "davidde/git",
  shells: ["zsh"],
  tags: [
    "git",
    "shell",
    "zsh",
    "productivity",
    "oh-my-zsh",
    "terminal",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
