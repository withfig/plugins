const plugin: Fig.Plugin = {
  icon: "😎",
  name: "git-aliases_mdumitru",
  displayName: "Git Aliases (mdumitru)",
  type: "shell",
  description:
    'This is a clone of the plugin "git" present at: https://github.com/robbyrussell/oh-my-zsh',
  authors: [
    {
      name: "mdumitru",
      github: "mdumitru",
    },
  ],
  github: "mdumitru/git-aliases",
  license: ["NOASSERTION"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["git-aliases.zsh"],
  },
};

export default plugin;
