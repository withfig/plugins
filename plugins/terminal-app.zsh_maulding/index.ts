const plugin: Fig.Plugin = {
  name: "terminal-app.zsh_maulding",
  type: "shell",
  description:
    "OSX 10.11(El Capitan) Terminal.app and Zsh integration using new status escape codes and a dash of Emoji to make your terminal shine.",
  authors: [
    {
      name: "maulding",
      github: "maulding",
    },
  ],
  github: "maulding/terminal-app.zsh",
  license: ["NOASSERTION"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["terminal-app.plugin.zsh"],
  },
};

export default plugin;
