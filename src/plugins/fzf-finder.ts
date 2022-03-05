const plugin: Fig.Plugin = {
  name: "fzf-finder",
  type: "shell",
  description: "An antigen plugin to have a cool search keybinding with fzf and (optionally) bat",
  github: "leophys/zsh-plugin-fzf-finder",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
