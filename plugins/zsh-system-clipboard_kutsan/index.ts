const plugin: Fig.Plugin = {
  name: "zsh-system-clipboard_kutsan",
  type: "shell",
  description: "System clipboard key bindings for Zsh Line Editor with vi mode. It is similar to what `set clipboard=unnamed` does for vim.",
  authors: [
    {
      name: "kutsan",
      github: "kutsan",
      twitter: "kutsankaplan",
    }
  ],
  github: "kutsan/zsh-system-clipboard",
  license: ["GPL-3.0"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "zsh",
    "zsh-plugin",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-system-clipboard.plugin.zsh"],
  },
};

export default plugin;
