const plugin: Fig.Plugin = {
  icon: "💥",
  name: "zsh-completion-generator_RobSis",
  type: "shell",
  description:
    "Plugin that generates completion functions automatically from getopt-style help texts",
  authors: [
    {
      name: "RobSis",
      github: "RobSis",
    },
  ],
  github: "RobSis/zsh-completion-generator",
  license: ["GPL-2.0"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh-completions", "zsh-plugins"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-completion-generator.plugin.zsh"],
  },
};

export default plugin;
