const plugin: Fig.Plugin = {
  name: "docker-helpers.zshplugin_unixorn",
  type: "shell",
  description: "Miscellaneous utility scripts and aliases for use with Docker.",
  authors: [
    {
      name: "unixorn",
      github: "unixorn",
      twitter: "curiousbiped",
    },
  ],
  github: "unixorn/docker-helpers.zshplugin",
  license: ["Apache-2.0"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["docker", "zsh", "docker-helpers", "zsh-plugin", "shell-scripts", "hacktoberfest"],
  installation: {
    origin: "github",
    sourceFiles: ["docker-helpers.plugin.zsh"],
  },
};

export default plugin;
