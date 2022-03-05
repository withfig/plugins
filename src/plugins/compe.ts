const plugin: Fig.Plugin = {
  name: "compe",
  type: "shell",
  description: "zsh completion source for nvim-compe",
  github: "tamago324/compe-zsh",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
