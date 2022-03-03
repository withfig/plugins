const plugin: Fig.Plugin = {
  name: "nix",
  type: "shell",
  description: "ZSH Completions for Nix",
  github: "spwhitt/nix-zsh-completions",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
