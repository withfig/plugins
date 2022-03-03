const plugin: Fig.Plugin = {
  name: "doas (senderman)",
  type: "shell",
  description: "Simple zsh plugin to insert doas by pressing double-ESC (forked from OMZ's sudo plugin)",
  github: "Senderman/doas-zsh-plugin",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
