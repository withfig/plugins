const plugin: Fig.Plugin = {
  icon: "👾",
  name: "oh-my-via_badouralix",
  displayName: "Oh My Via",
  type: "shell",
  description: "Custom theme for ZSH",
  authors: [
    {
      name: "badouralix",
      github: "badouralix",
    },
  ],
  github: "badouralix/oh-my-via",
  license: ["WTFPL"],
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: ["zsh", "theme", "zsh-theme", "via", "ecp"],
  installation: {
    origin: "github",
    sourceFiles: ["via.zsh-theme"],
  },
};

export default plugin;
