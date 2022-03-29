const plugin: Fig.Plugin = {
  name: "ls_zpm-zsh",
  type: "shell",
  description: "Zsh plugin for ls",
  authors: [
    {
      name: "zpm-zsh",
      github: "zpm-zsh",
    }
  ],
  github: "zpm-zsh/ls",
  license: ["GPL-3.0"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "ls",
    "coreutils",
    "zsh",
    "zpm",
    "zsh-plugin",
    "shell",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["ls.plugin.zsh"],
  },
};

export default plugin;
