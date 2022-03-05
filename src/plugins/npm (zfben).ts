const plugin: Fig.Plugin = {
  name: "npm (zfben)",
  type: "shell",
  description: "A zsh plugin for using `n` as `npm` aliases with `noglob` prefix and more.",
  github: "zfben/zsh-npm",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
