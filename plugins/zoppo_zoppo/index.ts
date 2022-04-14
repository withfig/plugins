const plugin: Fig.Plugin = {
  icon: "👾",
  name: "zoppo_zoppo",
  displayName: "Zoppo",
  type: "shell",
  description: "The crippled configuration framework for Zsh",
  authors: [
    {
      name: "zoppo",
      github: "zoppo",
    },
  ],
  github: "zoppo/zoppo",
  shells: ["zsh"],
  categories: ["Framework"],
  installation: {
    origin: "github",
    sourceFiles: ["zoppo.zsh"],
  },
};

export default plugin;
