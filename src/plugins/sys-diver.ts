const plugin: Fig.Plugin = {
  name: "sys-diver",
  type: "shell",
  description: "A zsh plugin for directory change or editor startup with only key operations using widgits without typing command",
  github: "ToruIwashita/sys-diver-zsh",
  shells: ["zsh"],
  tags: [
    "zsh",
    "zsh-plugin",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
