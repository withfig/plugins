const plugin: Fig.Plugin = {
  icon: "⚡️",
  name: "colorize_zpm-zsh",
  displayName: "Colorize",
  type: "shell",
  description: "Colorize the output of various programs",
  authors: [
    {
      name: "zpm-zsh",
      github: "zpm-zsh",
    },
  ],
  github: "zpm-zsh/colorize",
  license: ["GPL-3.0"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["colorize.plugin.zsh"],
  },
};

export default plugin;
