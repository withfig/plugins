const plugin: Fig.Plugin = {
  name: "vimto",
  type: "shell",
  description: "Improved zsh vim mode (bindkey -v) plugin",
  github: "laurenkt/zsh-vimto",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
