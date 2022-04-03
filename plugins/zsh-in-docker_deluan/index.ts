const plugin: Fig.Plugin = {
  name: "zsh-in-docker_deluan",
  type: "shell",
  description: "Install Zsh, Oh-My-Zsh and plugins inside a Docker container with one line!",
  authors: [
    {
      name: "deluan",
      github: "deluan",
      twitter: "deluan",
    },
  ],
  github: "deluan/zsh-in-docker",
  license: ["MIT"],
  shells: ["bash", "zsh"],
  categories: ["Other"],
  keywords: ["zsh", "oh-my-zsh", "docker", "dockerfile", "vscode"],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["zsh-in-docker.sh"],
    },
    zsh: {
      sourceFiles: ["zsh-in-docker.sh"],
    },
  },
};

export default plugin;
