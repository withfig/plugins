const plugin: Fig.Plugin = {
  icon: "🔗",
  name: "zhooks_agkozak",
  type: "shell",
  description: "Display Zsh hook functions and arrays",
  authors: [
    {
      name: "agkozak",
      github: "agkozak",
      twitter: "agkozak",
    },
  ],
  github: "agkozak/zhooks",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "hooks", "zsh-plugin", "zsh-configuration"],
  installation: {
    origin: "github",
    sourceFiles: ["zhooks.plugin.zsh"],
  },
};

export default plugin;
