const plugin: Fig.Plugin = {
  name: "zgen-compinit-tweak",
  type: "shell",
  description: "Make compinit runs only once after all loading is done by zgen",
  github: "seletskiy/zsh-zgen-compinit-tweak",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
