const plugin: Fig.Plugin = {
  name: "vapor",
  type: "shell",
  description: "Laravel vapor plugin for zsh to help you to run vapor from anywhere in the project tree, with auto-completion!",
  github: "notf0und/zsh-vapor",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
