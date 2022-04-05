const plugin: Fig.Plugin = {
  icon: "💾",
  name: "zsh-hangul_gomjellie",
  type: "shell",
  description: "한영 전환의 지옥에서 벗어나서 광명찾자!",
  authors: [
    {
      name: "gomjellie",
      github: "gomjellie",
    },
  ],
  github: "gomjellie/zsh-hangul",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["korean", "zsh-plugin"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-hangul.plugin.zsh"],
  },
};

export default plugin;
