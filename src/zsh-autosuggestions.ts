const plugin: Fig.Plugin = {
  name: "zsh-autosuggestions",
  type: "shell",
  description: "Fish-like autosuggestions for zsh",
  icon: "https://avatars.githubusercontent.com/u/567410",
  github: "zsh-users/zsh-autosuggestions",
  license: ["MIT"],
  shells: ["zsh"],
  tags: ["fishlike", "autosuggest", "zsh"],
  installation: {
    source: "github",
    use: "zsh-autosuggestions.zsh",
  },
};

export default plugin;
