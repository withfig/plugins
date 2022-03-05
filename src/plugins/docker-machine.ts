const plugin: Fig.Plugin = {
  name: "docker-machine",
  type: "shell",
  description: "Docker-machine plugin for oh-my-zsh",
  github: "asuran/zsh-docker-machine",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
