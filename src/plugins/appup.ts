const plugin: Fig.Plugin = {
  name: "appup",
  type: "shell",
  description: "The command that can save you typing 15 characters or more, each time!",
  github: "Cloudstek/zsh-plugin-appup",
  shells: ["zsh"],
  tags: [
    "docker",
    "zsh",
    "oh-my-zsh",
    "vagrant",
    "docker-compose",
    "aliases",
    "oh-my-zsh-plugin",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
