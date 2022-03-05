const plugin: Fig.Plugin = {
  name: "nodenv (c-uo)",
  type: "shell",
  description: "plugin like ohmyzsh/plugins/pyenv for nodenv & goenv",
  github: "C-uo/zsh-env",
  shells: ["zsh"],
  tags: [
    "zsh",
    "nodenv",
    "zinit-plugin",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
