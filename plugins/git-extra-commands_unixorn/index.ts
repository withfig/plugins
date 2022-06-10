const plugin: Fig.Plugin = {
  icon: "👾",
  name: "git-extra-commands_unixorn",
  displayName: "Git Extra Commands",
  type: "shell",
  description: "A collection of git utilities and useful extra git scripts",
  authors: [
    {
      name: "unixorn",
      github: "unixorn",
      twitter: "curiousbiped",
    },
  ],
  github: "unixorn/git-extra-commands",
  license: ["Apache-2.0"],
  shells: ["zsh"],
  categories: ["Convenience Function"],
  keywords: [
    "collection",
    "git",
    "zsh-plugins",
    "antigen",
    "oh-my-zsh-plugin",
    "oh-my-zsh",
    "hacktoberfest",
    "hacktoberfest2020",
    "shell-script",
    "shell-scripts",
    "zgenom",
    "prezto",
    "bash",
    "zsh-plugin",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["git-extra-commands.plugin.zsh"],
    bash: {
      postScript: ({ ctx }) =>
        `export PATH="$PATH:${ctx.plugin.installDirectory}/bin"`,
    },
    zsh: {
      postScript: ({ ctx }) =>
        `export PATH="$PATH:${ctx.plugin.installDirectory}/bin"`,
    },
    fish: {
      postScript: ({ ctx }) =>
        `set -Ua fish_user_paths "${ctx.plugin.installDirectory}/bin"`,
    },
  },
};

export default plugin;
