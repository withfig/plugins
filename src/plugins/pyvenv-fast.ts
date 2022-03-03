const plugin: Fig.Plugin = {
  name: "pyvenv-fast",
  type: "shell",
  description: "A zsh plugin to launch a Python venv.",
  github: "ACmyles/pyvenv-fast",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
