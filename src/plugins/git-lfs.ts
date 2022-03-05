const plugin: Fig.Plugin = {
  name: "git-lfs",
  type: "shell",
  description: "This plugin adds short aliases for the git-lfs commands",
  github: "nekofar/zsh-git-lfs",
  shells: ["zsh"],
  tags: [
    "git",
    "git-lfs",
    "zsh",
    "aliases",
    "zsh-plugin",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
