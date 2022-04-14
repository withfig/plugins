const plugin: Fig.Plugin = {
  name: "bitbucket-git-helpers.plugin.zsh_unixorn",
  displayName: "Bitbucket Git Helpers Zsh",
  description:
    "Add some git helper scripts for dealing with repos on bitbucket",
  icon: "🪣",
  type: "shell",
  authors: [
    {
      name: "unixorn",
      github: "unixorn",
      twitter: "curiousbiped",
    },
  ],
  github: "unixorn/bitbucket-git-helpers.plugin.zsh",
  license: ["Apache-2.0"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["bitbucket-git-helpers.plugin.zsh"],
  },
};

export default plugin;
