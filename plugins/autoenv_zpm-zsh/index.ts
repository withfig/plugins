const plugin: Fig.Plugin = {
  name: "autoenv_zpm-zsh",
  displayName: "Auto Env",
  description: "Auto Env for zsh",
  icon: "🔗",
  type: "shell",
  authors: [
    {
      name: "zpm-zsh",
      github: "zpm-zsh",
    },
  ],
  github: "zpm-zsh/autoenv",
  license: ["GPL-3.0"],
  shells: ["zsh"],
  categories: ["Productivity Hack"],
  keywords: [
    "zsh",
    "plugin",
    "shell",
    "autoenv",
    "zsh-plugin",
    "zpm",
    "zsh-plugins",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["autoenv.plugin.zsh"],
  },
};

export default plugin;
