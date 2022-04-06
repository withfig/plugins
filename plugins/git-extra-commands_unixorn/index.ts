const plugin: Fig.Plugin = {
  icon: "👾",
  name: "git-extra-commands_unixorn",
  displayName: "git-extra-commands",
  type: "shell",
  description:
    "A collection of git utilities and useful extra git scripts, packaged for ease of use with shell frameworks, though they aren't required.",
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
  categories: ["Other"],
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
  },
};

export default plugin;
