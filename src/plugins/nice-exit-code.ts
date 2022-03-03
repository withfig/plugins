const plugin: Fig.Plugin = {
  name: "nice-exit-code",
  type: "shell",
  description: "ZSH plugin that maps exit status code to human readable string",
  github: "bric3/nice-exit-code",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
