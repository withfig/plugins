const plugin: Fig.Plugin = {
  icon: "☀️",
  name: "colors_zpm-zsh",
  type: "shell",
  description: "Enhanced colors for zsh",
  authors: [
    {
      name: "zpm-zsh",
      github: "zpm-zsh",
    },
  ],
  github: "zpm-zsh/colors",
  license: ["GPL-3.0"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zpm", "shell", "zsh-plugin", "zsh"],
  installation: {
    origin: "github",
    sourceFiles: ["colors.plugin.zsh"],
  },
};

export default plugin;
