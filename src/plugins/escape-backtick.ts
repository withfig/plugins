const plugin: Fig.Plugin = {
  name: "escape-backtick",
  type: "shell",
  description: "Quickly insert escaped backticks when double-tapping \"`\"",
  github: "bezhermoso/zsh-escape-backtick",
  shells: ["zsh"],
  tags: [
    "zsh",
    "zsh-plugin",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
