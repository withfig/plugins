const plugin: Fig.Plugin = {
  name: "docker-aliases_webyneter",
  type: "shell",
  description: "zsh Docker aliases",
  authors: [
    {
      name: "webyneter",
      github: "webyneter",
    }
  ],
  github: "webyneter/docker-aliases",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "docker",
    "aliases",
    "alias",
    "zsh",
    "zshrc",
    "zsh-plugin",
    "zsh-plugins",
    "bash",
    "bashrc",
    "bash-alias",
    "bash-aliases",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["docker-aliases.plugin.zsh"],
  },
};

export default plugin;
