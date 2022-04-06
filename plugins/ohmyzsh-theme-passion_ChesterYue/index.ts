const plugin: Fig.Plugin = {
  icon: "🧑‍💻",
  name: "ohmyzsh-theme-passion_ChesterYue",
  displayName: "ohmyzsh-theme-passion",
  screenshots: [
    "https://raw.githubusercontent.com/ChesterYue/ohmyzsh-theme-passion/master/passion.gif",
  ],
  type: "shell",
  description: "An oh-my-zsh theme",
  authors: [
    {
      name: "ChesterYue",
      github: "ChesterYue",
    },
  ],
  github: "ChesterYue/ohmyzsh-theme-passion",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: ["zsh-theme"],
  installation: {
    origin: "github",
    sourceFiles: ["passion.zsh-theme"],
    dependencies: ({ ctx }) =>
      ctx.os === "macos" ? [{ type: "binary", name: "gdate" }] : [],
  },
};

export default plugin;
