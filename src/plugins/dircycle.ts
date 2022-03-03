const plugin: Fig.Plugin = {
  name: "dircycle",
  type: "shell",
  description: "A Zsh plugin for cycling through the directory stack.",
  github: "michaelxmcbride/zsh-dircycle",
  shells: ["zsh"],
  tags: [
    "shell",
    "zsh",
    "zsh-plugin",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
