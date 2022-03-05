const plugin: Fig.Plugin = {
  name: "joe",
  type: "shell",
  description: "A small zsh completion plugin for https://github.com/karan/joe",
  github: "corvofeng/joe-completion",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
