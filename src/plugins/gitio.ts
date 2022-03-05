const plugin: Fig.Plugin = {
  name: "gitio",
  type: "shell",
  description: "✂️ A zsh plugin for generating a GitHub short URL using git.io.",
  github: "denysdovhan/gitio-zsh",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
