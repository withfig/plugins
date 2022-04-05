const plugin: Fig.Plugin = {
  icon: "👾",
  name: "zsh-lux_pndurette",
  type: "shell",
  description:
    "zsh plugin to toggle light/dark modes of macOS but also of iTerm, Visual Studio Code and anything you can script/theme",
  authors: [
    {
      name: "pndurette",
      github: "pndurette",
      twitter: "PierreNick",
    },
  ],
  github: "pndurette/zsh-lux",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "zsh-plugin", "terminal", "dark-mode", "macos"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-lux.plugin.zsh"],
  },
};

export default plugin;
