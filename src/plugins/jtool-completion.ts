const plugin: Fig.Plugin = {
  name: "jtool-completion",
  type: "shell",
  description: "zsh completion for jtool",
  github: "beaugalbraith/jtool-completion",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
