const plugin: Fig.Plugin = {
  name: "docker-aliases",
  type: "shell",
  description: "zsh Docker aliases",
  github: "webyneter/docker-aliases",
  shells: ["zsh"],
  tags: [
    "bash",
    "docker",
    "zsh",
    "bashrc",
    "zshrc",
    "aliases",
    "alias",
    "zsh-plugin",
    "zsh-plugins",
    "bash-alias",
    "bash-aliases",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
