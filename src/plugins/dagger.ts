const plugin: Fig.Plugin = {
  name: "dagger",
  type: "shell",
  description: "Dagger plugin for oh-my-zsh",
  github: "jygastaud/dagger-oh-my-zsh",
  shells: ["zsh"],
  tags: [
    "zsh",
    "oh-my-zsh",
    "dagger",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
