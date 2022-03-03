const plugin: Fig.Plugin = {
  name: "fzf-z",
  type: "shell",
  description: "Plugin for zsh to integrate fzf and various 'frecency' plugins, including z.sh - enables easy switching between recent dirs in zsh",
  github: "andrewferrier/fzf-z",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
