const plugin: Fig.Plugin = {
  icon: "💡",
  name: "gradle-completion_gradle",
  displayName: "Gradle Completion",
  type: "shell",
  description: "Gradle tab completion for bash and zsh",
  authors: [
    {
      name: "gradle",
      github: "gradle",
      twitter: "gradle",
    },
  ],
  github: "gradle/gradle-completion",
  license: ["MIT"],
  shells: ["bash", "zsh"],
  categories: ["Completion"],
  keywords: ["zsh-completion", "bash-completion", "gradle"],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["gradle-completion.bash"],
    },
    zsh: {
      preScript: "autoload -Uz compinit; compinit",
      sourceFiles: ["gradle-completion.plugin.zsh"],
    },
  },
};

export default plugin;
