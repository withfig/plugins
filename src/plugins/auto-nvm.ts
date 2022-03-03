const plugin: Fig.Plugin = {
  name: "auto-nvm",
  type: "shell",
  description: "zsh nvm plugin",
  github: "manlao/zsh-auto-nvm",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
