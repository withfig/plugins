const plugin: Fig.Plugin = {
  name: "notify (marzocchi)",
  type: "shell",
  description: "Desktop notifications for long-running commands in zsh.",
  github: "marzocchi/zsh-notify",
  shells: ["zsh"],
  tags: [
    "linux",
    "shell",
    "zsh",
    "oh-my-zsh",
    "applescript",
    "iterm2",
    "notifier",
    "desktop-notifications",
    "macosx",
    "antigen",
    "zgen",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
