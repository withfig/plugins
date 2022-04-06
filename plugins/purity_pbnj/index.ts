const plugin: Fig.Plugin = {
  icon: "💡",
  name: "purity_pbnj",
  type: "shell",
  description: "Oh-My-ZSH prompt inspired by robbyrussell theme + pure prompt",
  authors: [
    {
      name: "pbnj",
      github: "pbnj",
      twitter: "petermbenjamin",
    },
  ],
  github: "pbnj/purity",
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: ["zsh", "zsh-theme", "oh-my-zsh", "pure", "purity", "minimal"],
  installation: {
    origin: "github",
    sourceFiles: ["purity.zsh-theme"],
  },
};

export default plugin;
