const plugin: Fig.Plugin = {
  name: "venv-wrapper",
  type: "shell",
  description: "zsh plugin defining functions to wrap working with python's builtin venv module",
  github: "glostis/venv-wrapper",
  shells: ["zsh"],
  tags: [
    "python",
    "zsh",
    "virtualenv",
    "venv",
    "virtualenv-manager",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
