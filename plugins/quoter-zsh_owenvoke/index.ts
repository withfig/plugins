const plugin: Fig.Plugin = {
  name: "quoter-zsh_owenvoke",
  type: "shell",
  description: "A ZSH plugin for displaying random quotes when opening a terminal.",
  authors: [
    {
      name: "owenvoke",
      github: "owenvoke",
      twitter: "owenvoke",
    }
  ],
  github: "owenvoke/quoter-zsh",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "zsh",
    "plugin",
    "zsh-plugins",
    "quotes",
    "cli",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["quoter-zsh.plugin.zsh"],
  },
};

export default plugin;
