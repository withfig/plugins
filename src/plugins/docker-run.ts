const plugin: Fig.Plugin = {
  name: "docker-run",
  type: "shell",
  description: "Run your favourite commands naturally, with Docker",
  github: "rawkode/zsh-docker-run",
  shells: ["zsh"],
  tags: [
    "docker",
    "zsh",
    "docker-image",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
