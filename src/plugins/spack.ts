const plugin: Fig.Plugin = {
  name: "spack",
  type: "shell",
  description: "This plugin adds useful functions and aliases for spack",
  github: "Game4Move78/zsh-spack",
  shells: ["zsh"],
  tags: [
    "zsh",
    "oh-my-zsh",
    "spack",
    "zsh-plugin",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
