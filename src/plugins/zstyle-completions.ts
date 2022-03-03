const plugin: Fig.Plugin = {
  name: "zstyle-completions",
  type: "shell",
  description: "Zstyle settings for Zsh completions based on Prezto's",
  github: "zshzoo/zstyle-completions",
  shells: ["zsh"],
  tags: [
    "zsh",
    "zsh-plugin",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
