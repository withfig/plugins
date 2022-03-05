const plugin: Fig.Plugin = {
  name: "clean-project",
  type: "shell",
  description: "ZSH plugin to remove files from projects (automatically by default)",
  github: "wwilsman/zsh-clean-project",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
