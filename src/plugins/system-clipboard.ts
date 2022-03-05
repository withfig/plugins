const plugin: Fig.Plugin = {
  name: "system-clipboard",
  type: "shell",
  description: "System clipboard key bindings for Zsh Line Editor with vi mode. It is similar to what `set clipboard=unnamed` does for vim.",
  github: "kutsan/zsh-system-clipboard",
  shells: ["zsh"],
  tags: [
    "zsh",
    "zsh-plugin",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
