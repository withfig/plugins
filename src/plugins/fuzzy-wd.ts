const plugin: Fig.Plugin = {
  name: "fuzzy-wd",
  type: "shell",
  description: "An oh-my-zsh plugin that adds fuzzy search for directories \"warped\" with WD Zsh plugin",
  github: "spodin/zsh-fuzzy-wd",
  shells: ["zsh"],
  tags: [
    "zsh",
    "oh-my-zsh",
    "oh-my-zsh-plugin",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
