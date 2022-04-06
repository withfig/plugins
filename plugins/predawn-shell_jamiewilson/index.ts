const plugin: Fig.Plugin = {
  icon: "🌅",
  name: "predawn-shell_jamiewilson",
  displayName: "Predawn Shell",
  description: "Predawn ZSH prompt",
  screenshots: ["https://i.imgur.com/lJ34FpJ.png"],
  type: "shell",
  authors: [
    {
      name: "jamiewilson",
      github: "jamiewilson",
    },
  ],
  github: "jamiewilson/predawn-shell",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Prompt"],
  installation: {
    origin: "github",
    sourceFiles: ["Predawn.zsh-theme"],
  },
};

export default plugin;
