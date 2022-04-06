const plugin: Fig.Plugin = {
  icon: "🔥",
  name: "zsh-osx-autoproxy_SukkaW",
  type: "shell",
  description:
    "An oh-my-zsh plugin that configures proxy environment variables based on macOS's system preferences automatically",
  authors: [
    {
      name: "SukkaW",
      github: "SukkaW",
      twitter: "isukkaw",
    },
  ],
  github: "SukkaW/zsh-osx-autoproxy",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "zsh",
    "oh-my-zsh",
    "oh-my-zsh-plugin",
    "zsh-plugin",
    "proxy-configuration",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-osx-autoproxy.plugin.zsh"],
  },
};

export default plugin;
