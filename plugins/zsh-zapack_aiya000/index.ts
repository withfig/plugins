const plugin: Fig.Plugin = {
  icon: "🚀",
  name: "zsh-zapack_aiya000",
  type: "shell",
  description: "The basic minimum zsh plugin **loader** :+1:",
  authors: [
    {
      name: "aiya000",
      github: "aiya000",
      twitter: "public_ai000ya",
    },
  ],
  github: "aiya000/zsh-zapack",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Framework"],
  keywords: ["zsh", "zsh-plugin", "git"],
  installation: {
    origin: "github",
    sourceFiles: ["zapack.zsh"],
  },
};

export default plugin;
