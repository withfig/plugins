const plugin: Fig.Plugin = {
  name: "kafka",
  type: "shell",
  description: "ZSH plugin to have Kafka automatic completion for most CLI tools",
  github: "Dabz/kafka-zsh-completions",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
