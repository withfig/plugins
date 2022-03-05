const plugin: Fig.Plugin = {
  name: "hangul",
  type: "shell",
  description: "한영 전환의 지옥에서 벗어나서 광명찾자!",
  github: "gomjellie/zsh-hangul",
  shells: ["zsh"],
  tags: [
    "korean",
    "zsh-plugin",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
