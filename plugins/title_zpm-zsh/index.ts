const plugin: Fig.Plugin = {
  icon: "☀️",
  name: "title_zpm-zsh",
  displayName: "Title (zpm)",
  type: "shell",
  description:
    "A zsh plugin that allows you to set a terminal header like any of PROMPT",
  authors: [
    {
      name: "zpm-zsh",
      github: "zpm-zsh",
    },
  ],
  github: "zpm-zsh/title",
  license: ["GPL-3.0"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh-plugin", "zsh", "zpm", "shell"],
  installation: {
    origin: "github",
    sourceFiles: ["title.plugin.zsh"],
  },
};

export default plugin;
