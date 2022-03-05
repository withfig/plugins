const plugin: Fig.Plugin = {
  name: "lux",
  type: "shell",
  description: "zsh plugin to toggle light/dark modes of macOS but also of iTerm, Visual Studio Code and anything you can script/theme",
  github: "pndurette/zsh-lux",
  shells: ["zsh"],
  tags: [
    "macos",
    "zsh",
    "terminal",
    "zsh-plugin",
    "dark-mode",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
