const plugin: Fig.Plugin = {
  icon: "🔩",
  name: "zsh-proxy_SukkaW",
  type: "shell",
  description: ":nut_and_bolt: An oh-my-zsh plugin to configure proxy",
  authors: [
    {
      name: "SukkaW",
      github: "SukkaW",
      twitter: "isukkaw",
    },
  ],
  github: "SukkaW/zsh-proxy",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "oh-my-zsh", "oh-my-zsh-plugin", "proxy"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-proxy.plugin.zsh"],
  },
};

export default plugin;
