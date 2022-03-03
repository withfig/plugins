const plugin: Fig.Plugin = {
  name: "github-cli",
  type: "shell",
  description: "Zsh github cli completion plugin.",
  github: "sudosubin/zsh-github-cli",
  shells: ["zsh"],
  tags: [
    "zsh",
    "zsh-plugin",
    "zsh-plugins",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
