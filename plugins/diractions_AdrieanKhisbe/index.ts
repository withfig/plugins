const plugin: Fig.Plugin = {
  icon: "💡",
  name: "diractions_AdrieanKhisbe",
  type: "shell",
  description: "👨‍💻 Doing Anything, Anywhere, from Here [zsh] 🚏",
  authors: [
    {
      name: "AdrieanKhisbe",
      github: "AdrieanKhisbe",
      twitter: "AdrieanKhisbe",
    },
  ],
  github: "AdrieanKhisbe/diractions",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "shell", "navigation", "hacktoberfest"],
  installation: {
    origin: "github",
    sourceFiles: ["diractions.plugin.zsh"],
  },
};

export default plugin;
