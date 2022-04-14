const plugin: Fig.Plugin = {
  icon: "💡",
  name: "undollar_zpm-zsh",
  displayName: "Undollar (zpm)",
  type: "shell",
  description:
    "Zsh plugin who strips the dollar sign from the beginning of the terminal command",
  authors: [
    {
      name: "zpm-zsh",
      github: "zpm-zsh",
    },
  ],
  github: "zpm-zsh/undollar",
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["undollar", "zsh", "zpm", "zsh-plugin"],
  installation: {
    origin: "github",
    sourceFiles: ["undollar.plugin.zsh"],
  },
};

export default plugin;
