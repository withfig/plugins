const plugin: Fig.Plugin = {
  icon: "☀️",
  name: "zsh-dircolors-solarized_joel-porquet",
  displayName: "Zsh Dircolors Solarized",
  description: "Solarized dircolors plugin for zsh",
  type: "shell",
  authors: [
    {
      name: "joel-porquet",
      github: "joel-porquet",
    },
  ],
  github: "joel-porquet/zsh-dircolors-solarized",
  shells: ["zsh"],
  categories: ["Color"],
  keywords: ["zsh", "solarized-dircolors", "solarized-theme", "antigen"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-dircolors-solarized.plugin.zsh"],
    dependencies: ({ ctx }) =>
      ctx.os === "macos"
        ? [
            {
              type: "binary",
              name: "gdircolors",
            },
          ]
        : [
            {
              type: "binary",
              name: "dircolors",
            },
          ],
    preScript: ({ ctx }) =>
      ctx.os === "macos" ? "alias dircolors='gdircolors'" : "",
  },
};

export default plugin;
