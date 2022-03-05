const plugin: Fig.Plugin = {
  name: "asdf-prompt",
  type: "shell",
  description: "Prompt info for asdf users in zsh",
  github: "CurryEleison/zsh-asdf-prompt",
  shells: ["zsh"],
  tags: [
    "zsh",
    "cli",
    "oh-my-zsh-plugin",
    "zsh-configuration",
    "asdf-vm",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
