const plugin: Fig.Plugin = {
  name: "kafka-zsh-completions_Dabz",
  type: "shell",
  description: "ZSH plugin to have Kafka automatic completion for most CLI tools",
  authors: [
    {
      name: "Dabz",
      github: "Dabz",
    }
  ],
  github: "Dabz/kafka-zsh-completions",
  shells: ["zsh"],
  categories: ["Compleation"],
  installation: {
    origin: "github",
    sourceFiles: ["kafka.plugin.zsh"],
  },
};

export default plugin;
