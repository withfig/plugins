const plugin: Fig.Plugin = {
  name: "umake",
  type: "shell",
  description: "A zsh plugin that enables shell completion for Ubuntu Make",
  github: "zlsun/umake",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
