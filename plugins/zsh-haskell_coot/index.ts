const plugin: Fig.Plugin = {
  name: "zsh-haskell_coot",
  type: "shell",
  description: "ghc and cabal completion for zsh shell",
  authors: [
    {
      name: "coot",
      github: "coot",
    }
  ],
  github: "coot/zsh-haskell",
  license: ["MPL-2.0"],
  shells: ["zsh"],
  categories: ["Completion"],
  keywords: [
    "zsh-completions",
    "zsh",
    "cabal-completion",
    "ghc",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["haskell.plugin.zsh"],
  },
};

export default plugin;
