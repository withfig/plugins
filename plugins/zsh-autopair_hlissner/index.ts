const plugin: Fig.Plugin = {
  icon: "💥",
  name: "zsh-autopair_hlissner",
  displayName: "zsh Autopair",
  type: "shell",
  description: "Auto-close and delete matching delimiters in zsh",
  screenshots: ["images/1.gif", "images/2.gif", "images/3.gif"],
  authors: [
    {
      name: "hlissner",
      github: "hlissner",
      twitter: "henriklissner",
    },
  ],
  github: "hlissner/zsh-autopair",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "zsh-plugins", "delimiters"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-autopair.plugin.zsh"],
  },
};

export default plugin;
