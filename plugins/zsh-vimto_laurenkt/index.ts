const plugin: Fig.Plugin = {
  icon: "💥",
  name: "zsh-vimto_laurenkt",
  displayName: "Zsh Vimto",
  type: "shell",
  description: "Improved zsh vim mode (bindkey -v) plugin",
  authors: [
    {
      name: "laurenkt",
      github: "laurenkt",
    },
  ],
  github: "laurenkt/zsh-vimto",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-vimto.zsh"],
  },
};

export default plugin;
