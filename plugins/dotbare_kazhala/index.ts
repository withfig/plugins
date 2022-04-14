const plugin: Fig.Plugin = {
  icon: "⚡️",
  name: "dotbare_kazhala",
  displayName: "DotBare",
  type: "shell",
  description: "Manage dotfiles and any git directories interactively with fzf",
  authors: [
    {
      name: "kazhala",
      github: "kazhala",
    },
  ],
  github: "kazhala/dotbare",
  license: ["MIT"],
  site: "https://github.com/kazhala/dotbare/wiki",
  shells: ["bash", "zsh"],
  categories: ["Other"],
  keywords: [
    "fzf",
    "dotfiles",
    "dotfiles-manager",
    "fzf-scripts",
    "config",
    "zsh-plugin",
    "bash",
    "bash-script",
    "zsh",
    "command-line-tool",
  ],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["dotbare.plugin.bash"],
    },
    zsh: {
      sourceFiles: ["dotbare.plugin.zsh"],
    },
  },
};

export default plugin;
