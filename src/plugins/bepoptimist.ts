const plugin: Fig.Plugin = {
  name: "bepoptimist",
  type: "shell",
  description: "A plugin to remap zsh vi-mode for french bépo keyboard",
  github: "sheoak/zsh-bepoptimist",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
