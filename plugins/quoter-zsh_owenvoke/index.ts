const plugin: Fig.Plugin = {
  icon: "😀",
  name: "quoter-zsh_owenvoke",
  displayName: "Quoter Zsh",
  type: "shell",
  description:
    "A ZSH plugin for displaying random quotes when opening a terminal.",
  authors: [
    {
      name: "owenvoke",
      github: "owenvoke",
      twitter: "owenvoke",
    },
  ],
  github: "owenvoke/quoter-zsh",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "plugin", "zsh-plugins", "quotes", "cli"],
  installation: {
    origin: "github",
    sourceFiles: ["quoter-zsh.plugin.zsh"],
  },
};

export default plugin;
