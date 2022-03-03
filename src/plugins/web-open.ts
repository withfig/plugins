const plugin: Fig.Plugin = {
  name: "web-open",
  type: "shell",
  description: "custom oh-my-zsh plugin",
  github: "AndrewHaluza/zsh-web-open",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
