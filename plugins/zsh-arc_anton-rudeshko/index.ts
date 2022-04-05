const plugin: Fig.Plugin = {
  icon: "🔗",
  name: "zsh-arc_anton-rudeshko",
  type: "shell",
  description:
    "zsh plugin with aliases for Yandex version control system `arc`",
  authors: [
    {
      name: "anton-rudeshko",
      github: "anton-rudeshko",
    },
  ],
  github: "anton-rudeshko/zsh-arc",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "arc", "yandex", "shell"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-arc.plugin.zsh"],
  },
};

export default plugin;
