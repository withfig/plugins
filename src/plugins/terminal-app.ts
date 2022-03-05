const plugin: Fig.Plugin = {
  name: "terminal-app",
  type: "shell",
  description: "OSX 10.11(El Capitan) Terminal.app and Zsh integration using new status escape codes and a dash of Emoji to make your terminal shine.",
  github: "maulding/terminal-app.zsh",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
