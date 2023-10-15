const plugin: Fig.Plugin = {
  icon: "▲",
  name: "zsh-theme_vercel_light",
  displayName: "Vercel Zsh Light Theme",
  type: "shell",
  description: "Yet another zsh theme",
  authors: [
    {
      name: "Daniel Munoz Gonzalez",
      github: "ataricoder",
    },
  ],
  github: "ataricoder/vercel-zsh-theme",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: ["zsh", "oh-my-zsh", "shell", "hyper", "vercel"],
  installation: {
    origin: "github",
    sourceFiles: ["ataricoder.vercel-zsh-theme"],
  },
};

export default plugin;
