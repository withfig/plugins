const plugin: Fig.Plugin = {
  name: "gitfast",
  type: "shell",
  description: "fork of gitfast plugin in ohmyzsh that fixes a bug where prompt hangs",
  github: "tevren/gitfast-zsh-plugin",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
