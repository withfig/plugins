const plugin: Fig.Plugin = {
  icon: "⭐️",
  name: "docker-zsh-completion_greymd",
  displayName: "Docker Zsh Completion",
  type: "shell",
  description: "Zsh completion for docker and docker-compose.",
  authors: [
    {
      name: "greymd",
      github: "greymd",
    },
  ],
  github: "greymd/docker-zsh-completion",
  license: ["MIT"],
  shells: ["bash", "zsh"],
  categories: ["Completion"],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["execute.sh"],
    },
    zsh: {
      sourceFiles: ["docker-zsh-completion.plugin.zsh"],
    },
  },
};

export default plugin;
