const plugin: Fig.Plugin = {
  name: "warhol.plugin.zsh_unixorn",
  type: "shell",
  description: "Colorize command output using grc and lscolors",
  authors: [
    {
      name: "unixorn",
      github: "unixorn",
      twitter: "curiousbiped",
    }
  ],
  github: "unixorn/warhol.plugin.zsh",
  license: ["Apache-2.0"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "zsh-plugin",
    "grc",
    "lscolors",
    "hacktoberfest",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["warhol.plugin.zsh"],
  },
};

export default plugin;
