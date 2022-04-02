const plugin: Fig.Plugin = {
  name: "gradle-completion_gradle",
  displayName: "gradle-completion",
  type: "shell",
  description: "Gradle tab completion for bash and zsh",
  authors: [
    {
      name: "gradle",
      github: "gradle",
      twitter: "gradle",
    }
  ],
  github: "gradle/gradle-completion",
  license: ["MIT"],
  shells: ["bash", "zsh"],
  categories: ["Completion"],
  keywords: [
    "zsh-completion",
    "bash-completion",
    "gradle",
  ],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: [
"gradle-completion.bash"
      ],
    },
    zsh: {
      sourceFiles: [
"gradle-completion.plugin.zsh"
      ],
    },
  },
};

export default plugin;
