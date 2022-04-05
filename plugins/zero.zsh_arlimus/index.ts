const plugin: Fig.Plugin = {
  icon: "🔗",
  name: "zero.zsh_arlimus",
  type: "shell",
  description: "theme and configuration plugin for zsh with oh-my-zsh",
  authors: [
    {
      name: "arlimus",
      github: "arlimus",
    },
  ],
  github: "arlimus/zero.zsh",
  license: ["Apache-2.0"],
  shells: ["bash", "zsh"],
  categories: ["Prompt"],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["bootstrap.sh", "install.sh"],
    },
    zsh: {
      sourceFiles: ["bootstrap.sh", "install.sh"],
    },
  },
};

export default plugin;
