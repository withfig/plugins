const plugin: Fig.Plugin = {
  name: "venv-lite",
  type: "shell",
  description: "Andy's very mini virtualenvwrapper-ish zsh plugin",
  github: "gimbo/venv-lite.zsh",
  shells: ["zsh"],
  tags: [
    "python",
    "virtualenv",
    "zsh-plugin",
    "virtualenvwrapper",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
