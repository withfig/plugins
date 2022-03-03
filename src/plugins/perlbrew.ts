const plugin: Fig.Plugin = {
  name: "perlbrew",
  type: "shell",
  description: "Provides a zsh plugin to install perlbrew if not present, and initialize it.",
  github: "tfiala/zsh-perlbrew",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
