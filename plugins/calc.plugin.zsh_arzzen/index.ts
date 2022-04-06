const plugin: Fig.Plugin = {
  icon: "🔗",
  name: "calc.plugin.zsh_arzzen",
  type: "shell",
  description: "zsh calculator - with support for basic math",
  authors: [
    {
      name: "arzzen",
      github: "arzzen",
      twitter: "arzzen",
    },
  ],
  github: "arzzen/calc.plugin.zsh",
  license: ["GPL-2.0"],
  site: "https://lukasmestan.com/simple-zsh-calculator/",
  shells: ["zsh"],
  categories: ["Convenience Function"],
  keywords: [
    "calculator",
    "calc",
    "zsh",
    "zsh-calculator",
    "plugin",
    "ohmyzsh-plugin",
    "bash",
    "shell",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["calc.plugin.zsh"],
  },
};

export default plugin;
