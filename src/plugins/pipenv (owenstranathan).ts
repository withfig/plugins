const plugin: Fig.Plugin = {
  name: "pipenv (owenstranathan)",
  type: "shell",
  description: "a zsh plugin for pipenv",
  github: "owenstranathan/pipenv.zsh",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
