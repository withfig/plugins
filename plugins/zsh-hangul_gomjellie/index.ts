const plugin: Fig.Plugin = {
  icon: "🇰🇷",
  name: "zsh-hangul_gomjellie",
  displayName: "zsh-hangul",
  description: "한영 전환의 지옥에서 벗어나서 광명찾자!",
  screenshots: [
    "https://raw.githubusercontent.com/gomjellie/zsh-hangul/master/.github/zsh-hangul.gif",
  ],
  type: "shell",
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
