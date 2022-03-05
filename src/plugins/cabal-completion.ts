const plugin: Fig.Plugin = {
  name: "cabal-completion",
  type: "shell",
  description: "ZSH plugin for tab completion of `cabal` commands",
  github: "ehamberg/zsh-cabal-completion",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
