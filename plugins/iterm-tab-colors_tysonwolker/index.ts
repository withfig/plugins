const plugin: Fig.Plugin = {
  name: "iterm-tab-colors_tysonwolker",
  type: "shell",
  description: "Tabs automatically change colors depending on the folder you are in.",
  authors: [
    {
      name: "tysonwolker",
      github: "tysonwolker",
    }
  ],
  github: "tysonwolker/iterm-tab-colors",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-tab-colors.plugin.zsh"],
  },
};

export default plugin;
