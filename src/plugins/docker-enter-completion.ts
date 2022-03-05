const plugin: Fig.Plugin = {
  name: "docker-enter-completion",
  type: "shell",
  description: "docker-enter command shell completion",
  github: "primait/docker-enter-completion",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
