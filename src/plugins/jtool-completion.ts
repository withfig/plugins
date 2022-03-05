const plugin: Fig.Plugin = {
  name: "jtool-completion",
  type: "shell",
  description: "zsh completion for jtool",
  github: "beaugalbraith/jtool-completion",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
