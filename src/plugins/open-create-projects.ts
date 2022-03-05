const plugin: Fig.Plugin = {
  name: "open-create-projects",
  type: "shell",
  description: "zsh script to open or create existing or new projects, respectively on your JetBrains IDEs",
  github: "marcossegovia/open-create-projects",
  shells: ["zsh"],
  tags: [
    "plugin",
    "zsh",
    "oh-my-zsh",
    "intellij",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
