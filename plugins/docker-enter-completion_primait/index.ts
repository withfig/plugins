const plugin: Fig.Plugin = {
  name: "docker-enter-completion_primait",
  type: "shell",
  description: "docker-enter command shell completion",
  authors: [
    {
      name: "primait",
      github: "primait",
    }
  ],
  github: "primait/docker-enter-completion",
  license: ["ISC"],
  shells: ["bash", "zsh"],
  categories: ["Compleation"],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: [
"docker-enter-completion.bash"
      ],
    },
    zsh: {
      sourceFiles: [
"_docker-enter-completion.zsh"
      ],
    },
  },
};

export default plugin;
