const plugin: Fig.Plugin = {
  name: "update-zsh",
  type: "shell",
  description: "oh-my-zsh plugin",
  github: "AndrewHaluza/zsh-update-plugin",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
