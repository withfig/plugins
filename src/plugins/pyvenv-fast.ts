const plugin: Fig.Plugin = {
  name: "pyvenv-fast",
  type: "shell",
  description: "A zsh plugin to launch a Python venv.",
  github: "ACmyles/pyvenv-fast",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
