const plugin: Fig.Plugin = {
  icon: "🚀",
  name: "zsh-nix-shell_chisui",
  displayName: "Zsh Nix Shell",
  type: "shell",
  description: "zsh plugin that lets you use zsh in nix-shell shells.",
  authors: [
    {
      name: "chisui",
      github: "chisui",
    },
  ],
  github: "chisui/zsh-nix-shell",
  license: ["BSD-3-Clause"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "nix", "nix-shell", "zsh-nix"],
  installation: {
    origin: "github",
    sourceFiles: ["nix-shell.plugin.zsh"],
  },
};

export default plugin;
