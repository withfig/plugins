const plugin: Fig.Plugin = {
  icon: "💡",
  name: "virtualz_aperezdc",
  displayName: "Virtualz",
  type: "shell",
  description: "Virtualfish-alike Python virtualenv wrapper for Zsh",
  authors: [
    {
      name: "aperezdc",
      github: "aperezdc",
    },
  ],
  github: "aperezdc/virtualz",
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "python", "virtualenv", "plugin"],
  installation: {
    origin: "github",
    sourceFiles: ["virtualz.plugin.zsh"],
  },
};

export default plugin;
