const plugin: Fig.Plugin = {
  name: "bitbucket-git-helpers.plugin.zsh_unixorn",
  type: "shell",
  description: "Add some git helper scripts for dealing with repos on bitbucket",
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
