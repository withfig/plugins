const plugin: Fig.Plugin = {
  name: "update-zsh",
  type: "shell",
  description: "oh-my-zsh plugin",
  github: "AndrewHaluza/zsh-update-plugin",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
