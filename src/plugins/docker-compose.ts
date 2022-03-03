const plugin: Fig.Plugin = {
  name: "docker-compose",
  type: "shell",
  description: "ZSH plugin that display status of project containers",
  github: "sroze/docker-compose-zsh-plugin",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
