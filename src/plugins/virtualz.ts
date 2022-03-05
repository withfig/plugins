const plugin: Fig.Plugin = {
  name: "virtualz",
  type: "shell",
  description: "Virtualfish-alike Python virtualenv wrapper for Zsh",
  github: "aperezdc/virtualz",
  shells: ["zsh"],
  tags: [
    "python",
    "plugin",
    "zsh",
    "virtualenv",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
