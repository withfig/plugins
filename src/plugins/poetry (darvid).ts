const plugin: Fig.Plugin = {
  name: "poetry (darvid)",
  type: "shell",
  description: "🐚 Simple ZSH plugin for automatically activating and deactivating Poetry-created virtualenvs. 🐍",
  github: "darvid/zsh-poetry",
  shells: ["zsh"],
  tags: [
    "python",
    "zsh",
    "virtualenv",
    "zsh-plugin",
    "zsh-plugins",
    "python-package-management",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
