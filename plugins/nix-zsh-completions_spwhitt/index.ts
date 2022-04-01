const plugin: Fig.Plugin = {
  name: "nix-zsh-completions_spwhitt",
  type: "shell",
  description: "ZSH Completions for Nix",
  authors: [
    {
      name: "spwhitt",
      github: "spwhitt",
    }
  ],
  github: "spwhitt/nix-zsh-completions",
  license: ["BSD-3-Clause"],
  shells: ["zsh"],
  categories: ["Completion"],
  installation: {
    origin: "github",
    sourceFiles: ["nix-zsh-completions.plugin.zsh"],
  },
};

export default plugin;
