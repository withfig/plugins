const plugin: Fig.Plugin = {
  icon: "🚀",
  name: "lando-zsh_JoshuaBedford",
  displayName: "Lando Zsh",
  type: "shell",
  description: "A simple zsh plugin for lando commands.",
  authors: [
    {
      name: "JoshuaBedford",
      github: "JoshuaBedford",
    },
  ],
  github: "JoshuaBedford/lando-zsh",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["lando.plugin.zsh"],
  },
};

export default plugin;
