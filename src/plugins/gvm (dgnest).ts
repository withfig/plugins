const plugin: Fig.Plugin = {
  name: "gvm (dgnest)",
  type: "shell",
  description: "gvm (Go version manager) plugin for zsh",
  github: "dgnest/zsh-gvm-plugin",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
