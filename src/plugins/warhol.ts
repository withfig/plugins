const plugin: Fig.Plugin = {
  name: "warhol",
  type: "shell",
  description: "Colorize command output using grc and lscolors",
  github: "unixorn/warhol.plugin.zsh",
  shells: ["zsh"],
  tags: [
    "grc",
    "zsh-plugin",
    "hacktoberfest",
    "lscolors",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
