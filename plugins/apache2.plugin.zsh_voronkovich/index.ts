const plugin: Fig.Plugin = {
  icon: "😀",
  name: "apache2.plugin.zsh_voronkovich",
  type: "shell",
  description: "ZSH plugin for Apache 2.",
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
