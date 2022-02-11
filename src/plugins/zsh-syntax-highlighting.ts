const plugin: Fig.Plugin = {
  name: "zsh-syntax-highlighting",
  type: "shell",
  description: "Fish shell like syntax highlighting for Zsh",
  icon: "https://avatars.githubusercontent.com/u/567410",
  github: "zsh-users/zsh-syntax-highlighting",
  license: ["BSD"],
  shells: ["zsh"],
  tags: ["zsh", "fishlike", "syntax-highlighting"],
  installation: {
    source: "github",
  },
};

export default plugin;
