const plugin: Fig.Plugin = {
  icon: "😀",
  name: "zsh-notify_marzocchi",
  displayName: "Zsh Notify (marzocchi)",
  type: "shell",
  description: "Desktop notifications for long-running commands in zsh.",
  authors: [
    {
      name: "marzocchi",
      github: "marzocchi",
    },
  ],
  github: "marzocchi/zsh-notify",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "zsh",
    "desktop-notifications",
    "iterm2",
    "notifier",
    "shell",
    "linux",
    "macosx",
    "applescript",
    "oh-my-zsh",
    "zgen",
    "antigen",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["notify.plugin.zsh"],
  },
};

export default plugin;
