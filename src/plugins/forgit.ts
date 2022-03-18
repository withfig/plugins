const plugin: Fig.Plugin = {
  name: "forgit",
  type: "shell",
  description: "A utility tool powered by fzf for using git interactively.",
  icon: "💤",
  authors: [
    {
      name: "wfxr",
      github: "wfxr",
    },
  ],
  github: "wfxr/forgit",
  license: ["MIT"],
  shells: ["bash", "zsh"],
  categories: ["Other"],
  keywords: ["fzf", "git", "cli", "zsh", "zsh-plugin", "bash", "fish"],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["forgit.plugin.sh"],
    },
    zsh: {
      sourceFiles: ["forgit.plugin.zsh"],
    },
  },
};

export default plugin;
