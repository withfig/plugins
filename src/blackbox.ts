const plugin: Fig.Plugin = {
  name: "blackbox",
  type: "shell",
  description: "Safely store secrets in Git/Mercurial/Subversion",
  github: "StackExchange/blackbox",
  license: ["MIT"],
  shells: ["bash", "zsh", "fish"],
  tags: ["git", "secrets"],
  installation: {
    source: "github",
  },
};

export default plugin;
