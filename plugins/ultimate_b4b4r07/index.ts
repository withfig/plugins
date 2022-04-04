const plugin: Fig.Plugin = {
  name: "ultimate_b4b4r07",
  type: "shell",
  description: "Ultimate is a simple theme for minimalistic zsh users",
  authors: [
    {
      name: "b4b4r07",
      github: "b4b4r07",
      twitter: "b4b4r07",
    },
  ],
  github: "b4b4r07/ultimate",
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: ["zsh-theme", "zplug"],
  installation: {
    origin: "github",
    sourceFiles: ["ultimate.zsh-theme"],
  },
};

export default plugin;
