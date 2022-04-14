const plugin: Fig.Plugin = {
  name: "purify_kyoz",
  displayName: "Purify",
  description: "Clean & vibrant prompt for zsh",
  icon: "🌈",
  screenshots: ["https://i.imgur.com/Pu3ffXL.png"],
  authors: [
    {
      name: "Kyoz",
      github: "kyoz",
    },
  ],
  github: "kyoz/purify",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: ["zsh", "oh-my-zsh"],
  type: "shell",
  installation: {
    origin: "github",
    sourceFiles: ["zsh/purify.zsh-theme"],
  },
};

export default plugin;
