const plugin: Fig.Plugin = {
  name: "clean-project",
  type: "shell",
  description: "ZSH plugin to remove files from projects (automatically by default)",
  github: "wwilsman/zsh-clean-project",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
