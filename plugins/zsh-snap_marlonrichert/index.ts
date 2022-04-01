const plugin: Fig.Plugin = {
  name: "zsh-snap_marlonrichert",
  type: "shell",
  description: "⚡️ Znap! The fast & light-weight Zsh plugin manager that's easy to grok. Also functions as a generic Git repo manager.",
  authors: [
    {
      name: "marlonrichert",
      github: "marlonrichert",
      twitter: "MarlonRichert",
    }
  ],
  github: "marlonrichert/zsh-snap",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Framework"],
  keywords: [
    "zsh",
    "zsh-configuration",
    "plugin-manager",
    "git",
    "zshrc",
    "zsh-plugins",
    "repo-management",
    "shell",
    "zsh-plugin",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["install.zsh", "run-tests.zsh", "znap.zsh"],
  },
};

export default plugin;
