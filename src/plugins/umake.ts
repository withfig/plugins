const plugin: Fig.Plugin = {
  name: "umake",
  type: "shell",
  description: "A zsh plugin that enables shell completion for Ubuntu Make",
  github: "zlsun/umake",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
