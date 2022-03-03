const plugin: Fig.Plugin = {
  name: "rustup",
  type: "shell",
  description: "Rustup completion plugin for oh-my-zsh framework",
  github: "pkulev/zsh-rustup-completion",
  shells: ["zsh"],
  tags: [
    "zsh",
    "oh-my-zsh",
    "zsh-completion",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
