const plugin: Fig.Plugin = {
  icon: "⚡️",
  name: "zsh-colored-man-pages_ael-code",
  displayName: "Zsh Colored Man Pages",
  type: "shell",
  description: "zsh plugin that colorifies man pages",
  authors: [
    {
      name: "ael-code",
      github: "ael-code",
    },
  ],
  github: "ael-code/zsh-colored-man-pages",
  license: ["GPL-3.0"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["colored-man-pages.plugin.zsh"],
  },
};

export default plugin;
