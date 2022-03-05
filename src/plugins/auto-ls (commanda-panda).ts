const plugin: Fig.Plugin = {
  name: "auto-ls (commanda-panda)",
  type: "shell",
  description: "ZSH plugin that automatically runs ls or color-ls if available on cd",
  github: "aikow/zsh-auto-ls",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
