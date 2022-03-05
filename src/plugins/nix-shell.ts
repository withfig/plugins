const plugin: Fig.Plugin = {
  name: "nix-shell",
  type: "shell",
  description: "zsh plugin that lets you use zsh in nix-shell shells.",
  github: "chisui/zsh-nix-shell",
  shells: ["zsh"],
  tags: [
    "zsh",
    "nix",
    "nix-shell",
    "zsh-nix",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
