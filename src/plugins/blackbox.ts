const plugin: Fig.Plugin = {
  name: "blackbox",
  type: "shell",
  description: "Safely store secrets in Git/Mercurial/Subversion",
  github: "StackExchange/blackbox",
  license: ["MIT"],
  shells: ["zsh"],
  tags: ["git", "secrets"],
  installation: {
    origin: "github",
    sourceFiles: "blackbox.plugin.zsh"
  },
};

export default plugin;
