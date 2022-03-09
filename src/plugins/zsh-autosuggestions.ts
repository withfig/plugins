const plugin: Fig.Plugin = {
  name: "zsh-autosuggestions",
  type: "shell",
  description: "Fish-like autosuggestions for zsh",
  icon: "https://avatars.githubusercontent.com/u/567410",
  github: "zsh-users/zsh-autosuggestions",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Compleation"],
  keywords: [
    "shell",
    "autosuggest",
    "zsh",
    "zsh-autosuggestions",
    "fish",
    "autocomplete",
  ],
  installation: {
    origin: "github",
    sourceFiles: "zsh-autosuggestions.zsh",
  },
};

export default plugin;
