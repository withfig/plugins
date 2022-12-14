const plugin: Fig.Plugin = {
  hidden: true,
  icon: "🚀",
  name: "iterm-tab-colors_tysonwolker",
  displayName: "iTerm Tab Colors",
  type: "shell",
  description:
    "Tabs automatically change colors depending on the folder you are in.",
  authors: [
    {
      name: "tysonwolker",
      github: "tysonwolker",
    },
  ],
  github: "tysonwolker/iterm-tab-colors",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Color"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-tab-colors.plugin.zsh"],
  },
};

export default plugin;
