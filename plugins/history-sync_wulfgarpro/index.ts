const plugin: Fig.Plugin = {
  name: "history-sync_wulfgarpro",
  type: "shell",
  description:
    "An oh-my-zsh plugin for GPG encrypted internet synchronised Zsh history, with Git.",
  authors: [
    {
      name: "wulfgarpro",
      github: "wulfgarpro",
    },
  ],
  github: "wulfgarpro/history-sync",
  license: ["MIT"],
  site: "https://www.wulfgar.pro/synchronising-zsh-history-over-the-internet-with-oh-my-zsh-and-history-sync/",
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh-history", "oh-my-zsh", "zsh-plugin", "zsh"],
  installation: {
    origin: "github",
    sourceFiles: ["history-sync.plugin.zsh"],
  },
};

export default plugin;
