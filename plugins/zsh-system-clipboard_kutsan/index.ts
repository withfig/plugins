const plugin: Fig.Plugin = {
  icon: "💾",
  name: "zsh-system-clipboard_kutsan",
  displayName: "Zsh System Clipboard",
  type: "shell",
  screenshots: ["https://i.imgur.com/LyL0GfQ.gif"],
  description:
    "System clipboard key bindings for Zsh Line Editor with vi mode. It is similar to what `set clipboard=unnamed` does for vim.",
  authors: [
    {
      name: "kutsan",
      github: "kutsan",
      twitter: "kutsankaplan",
    },
  ],
  github: "kutsan/zsh-system-clipboard",
  license: ["GPL-3.0"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "zsh-plugin", "vim"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-system-clipboard.plugin.zsh"],
  },
};

export default plugin;
