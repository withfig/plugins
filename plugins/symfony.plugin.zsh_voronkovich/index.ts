const plugin: Fig.Plugin = {
  icon: "🚀",
  name: "symfony.plugin.zsh_voronkovich",
  displayName: "Symfony Zsh Plugin",
  type: "shell",
  description: "Zsh plugin for Symfony",
  authors: [
    {
      name: "voronkovich",
      github: "voronkovich",
    },
  ],
  github: "voronkovich/symfony.plugin.zsh",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["symfony.plugin.zsh"],
  },
};

export default plugin;
