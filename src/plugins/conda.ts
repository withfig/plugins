const plugin: Fig.Plugin = {
  name: "conda",
  type: "shell",
  description: "zsh completion for conda",
  github: "esc/conda-zsh-completion",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
