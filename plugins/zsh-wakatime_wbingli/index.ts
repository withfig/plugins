const plugin: Fig.Plugin = {
  icon: "😀",
  name: "zsh-wakatime_wbingli",
  type: "shell",
  description: "ZSH plugin for wakatime",
  authors: [
    {
      name: "wbingli",
      github: "wbingli",
    },
  ],
  github: "wbingli/zsh-wakatime",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-wakatime.plugin.zsh"],
  },
};

export default plugin;
