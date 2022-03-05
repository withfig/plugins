const plugin: Fig.Plugin = {
  name: "haskell",
  type: "shell",
  description: "ghc and cabal completion for zsh shell",
  github: "coot/zsh-haskell",
  shells: ["zsh"],
  tags: [
    "zsh",
    "zsh-completions",
    "ghc",
    "cabal-completion",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
