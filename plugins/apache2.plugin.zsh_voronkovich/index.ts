const plugin: Fig.Plugin = {
  name: "apache2.plugin.zsh_voronkovich",
  displayName: "Apache2 Plugin for Zsh",
  description: "ZSH plugin for Apache 2.",
  icon: "🪶",
  type: "shell",
  authors: [
    {
      name: "voronkovich",
      github: "voronkovich",
    },
  ],
  github: "voronkovich/apache2.plugin.zsh",
  license: ["LGPL-3.0"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["apache2.plugin.zsh"],
  },
};

export default plugin;
