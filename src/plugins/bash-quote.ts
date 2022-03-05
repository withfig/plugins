const plugin: Fig.Plugin = {
  name: "bash-quote",
  type: "shell",
  description: "Plugin for ZSH to get random quote from Bash.im",
  github: "jtprogru/bash-quote",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
