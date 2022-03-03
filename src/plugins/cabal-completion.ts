const plugin: Fig.Plugin = {
  name: "cabal-completion",
  type: "shell",
  description: "ZSH plugin for tab completion of `cabal` commands",
  github: "ehamberg/zsh-cabal-completion",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
