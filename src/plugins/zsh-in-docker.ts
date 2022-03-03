const plugin: Fig.Plugin = {
  name: "zsh-in-docker",
  type: "shell",
  description: "Install Zsh, Oh-My-Zsh and plugins inside a Docker container with one line!",
  github: "deluan/zsh-in-docker",
  shells: ["zsh"],
  tags: [
    "docker",
    "zsh",
    "dockerfile",
    "oh-my-zsh",
    "vscode",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
