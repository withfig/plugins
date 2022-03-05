const plugin: Fig.Plugin = {
  name: "copyzshell",
  type: "shell",
  description: "A plugin for oh-my-zsh to copy your shell configuration to another machine over ssh.",
  github: "rutchkiwi/copyzshell",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
