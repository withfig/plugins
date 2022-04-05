const plugin: Fig.Plugin = {
  icon: "👾",
  name: "pctl_ytet5uy4",
  type: "shell",
  description: "zsh plugin for proxy",
  authors: [
    {
      name: "ytet5uy4",
      github: "ytet5uy4",
    },
  ],
  github: "ytet5uy4/pctl",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "zsh-plugin"],
  installation: {
    origin: "github",
    sourceFiles: ["init.zsh"],
  },
};

export default plugin;
