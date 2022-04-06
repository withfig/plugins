const plugin: Fig.Plugin = {
  name: "blackbox",
  displayName: "BlackBox",
  type: "shell",
  description: "Safely store secrets in Git/Mercurial/Subversion",
  icon: "🔒",
  github: "StackExchange/blackbox",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Convenience Function"],
  keywords: ["security", "gpg", "version control", "VCS", "secret management"],
  installation: {
    origin: "github",
    sourceFiles: ["blackbox.plugin.zsh"],
  },
};

export default plugin;
