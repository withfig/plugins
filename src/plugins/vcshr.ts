const plugin: Fig.Plugin = {
  name: "vcshr",
  type: "shell",
  description: "A function to help you require vcsh repositories.",
  github: "aubreypwd/zsh-plugin-vcshr",
  shells: ["zsh"],
  tags: [
    "zsh",
    "zsh-plugin",
    "zsh-plugins",
    "vcsh",
    "vcsh-repositories",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
