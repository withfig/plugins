const plugin: Fig.Plugin = {
  name: "ls_zpm-zsh",
  displayName: "Zpm ls",
  description: "Zsh plugin for ls",
  icon: "📁",
  type: "shell",
  authors: [
    {
      name: "zpm-zsh",
      github: "zpm-zsh",
    },
  ],
  github: "zpm-zsh/ls",
  license: ["GPL-3.0"],
  shells: ["zsh"],
  categories: ["Alias"],
  keywords: ["ls", "coreutils", "zsh", "zpm", "zsh-plugin", "shell"],
  installation: {
    origin: "github",
    sourceFiles: ["ls.plugin.zsh"],
  },
  configuration: [
    {
      displayName: "Prefer `ls`",
      description: "Prefer `ls` over `exa`",
      name: "ZSH_LS_PREFER_LS",
      type: "environmentVariable",
      interface: "toggle",
      default: false,
    },
    {
      displayName: "Disable Git",
      description: "Disable git integration in exa",
      name: "ZSH_LS_DISABLE_GIT",
      type: "environmentVariable",
      interface: "toggle",
      default: false,
    },
  ],
};

export default plugin;
