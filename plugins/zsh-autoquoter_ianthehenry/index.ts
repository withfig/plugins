const plugin: Fig.Plugin = {
  name: "zsh-autoquoter_ianthehenry",
  type: "shell",
  description: "automatically quote arguments to commands like `git commit -m`",
  authors: [
    {
      name: "ianthehenry",
      github: "ianthehenry",
      twitter: "ianthehenry",
    }
  ],
  github: "ianthehenry/zsh-autoquoter",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "zsh",
    "zsh-plugin",
    "zle-widgets",
    "zle",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-autoquoter.plugin.zsh"],
  },
};

export default plugin;
