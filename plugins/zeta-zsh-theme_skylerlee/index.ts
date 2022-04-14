const plugin: Fig.Plugin = {
  icon: "🧑‍💻",
  name: "zeta-zsh-theme_skylerlee",
  displayName: "ζ(Zeta) Zsh Theme (skylerlee)",
  type: "shell",
  description: "Another ⭐️ theme for oh-my-zsh",
  screenshots: [
    "https://user-images.githubusercontent.com/6789491/57182938-68197180-6ed8-11e9-9171-74b4618be62f.jpg",
  ],
  authors: [
    {
      name: "skylerlee",
      github: "skylerlee",
    },
  ],
  github: "skylerlee/zeta-zsh-theme",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: ["zsh", "oh-my-zsh", "theme"],
  installation: {
    origin: "github",
    sourceFiles: ["zeta.zsh-theme"],
  },
};

export default plugin;
