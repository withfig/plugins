const plugin: Fig.Plugin = {
  icon: "▲",
  name: "zsh-theme_vercel",
  type: "shell",
  description: "Yet another zsh theme",
  authors: [
    {
      name: "vercel",
      github: "vercel",
    },
  ],
  github: "vercel/zsh-theme",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: ["zsh", "oh-my-zsh", "shell", "hyper", "vercel"],
  installation: {
    origin: "github",
    sourceFiles: ["vercel.zsh-theme"],
  },
};

export default plugin;
