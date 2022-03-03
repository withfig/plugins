const plugin: Fig.Plugin = {
  name: "dirrc",
  type: "shell",
  description: "Custom shell (sh, bash, zsh) plugins",
  github: "gmatheu/shell-plugins",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
