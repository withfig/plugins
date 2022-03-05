const plugin: Fig.Plugin = {
  name: "arc",
  type: "shell",
  description: "zsh plugin with aliases for Yandex version control system `arc`",
  github: "anton-rudeshko/zsh-arc",
  shells: ["zsh"],
  tags: [
    "shell",
    "zsh",
    "yandex",
    "arc",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
