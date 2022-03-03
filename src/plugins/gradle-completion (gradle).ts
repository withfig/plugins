const plugin: Fig.Plugin = {
  name: "gradle-completion (gradle)",
  type: "shell",
  description: "Gradle tab completion for bash and zsh",
  github: "gradle/gradle-completion",
  shells: ["zsh"],
  tags: [
    "gradle",
    "bash-completion",
    "zsh-completion",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
