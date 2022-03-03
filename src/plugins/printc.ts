const plugin: Fig.Plugin = {
  name: "printc",
  type: "shell",
  description: "zsh plugin for wrapping ANSI color codes",
  github: "philFernandez/printc",
  shells: ["zsh"],
  tags: [
    "shell",
    "zsh",
    "oh-my-zsh",
    "zplug",
    "ansi-colors",
    "zsh-plugin",
    "zsh-plugins",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
