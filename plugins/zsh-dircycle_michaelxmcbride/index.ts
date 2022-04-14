const plugin: Fig.Plugin = {
  icon: "💥",
  name: "zsh-dircycle_michaelxmcbride",
  displayName: "Zsh Dircycle",
  type: "shell",
  description: "A Zsh plugin for cycling through the directory stack.",
  authors: [
    {
      name: "michaelxmcbride",
      github: "michaelxmcbride",
    },
  ],
  github: "michaelxmcbride/zsh-dircycle",
  license: ["MIT"],
  site: "https://github.com/michaelxmcbride/zsh-dircycle",
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "shell", "zsh-plugin"],
  installation: {
    origin: "github",
    sourceFiles: ["dircycle.plugin.zsh"],
  },
};

export default plugin;
