const plugin: Fig.Plugin = {
  icon: "🐚",
  name: "zsh-poetry_darvid",
  displayName: "Zsh Poetry",
  type: "shell",
  description:
    "Simple ZSH plugin for automatically activating and deactivating " +
    "Poetry-created virtualenvs. 🐍",
  authors: [
    {
      name: "darvid",
      github: "darvid",
    },
  ],
  github: "darvid/zsh-poetry",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "zsh",
    "python",
    "zsh-plugin",
    "zsh-plugins",
    "python-package-management",
    "virtualenv",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-poetry.plugin.zsh"],
  },
};

export default plugin;
