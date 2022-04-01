const plugin: Fig.Plugin = {
  name: "zcolors_marlonrichert",
  type: "shell",
  description: "🌈 Z Colors uses your $LS_COLORS to generate a coherent theme for Git and your Zsh prompt, command line and completions.",
  authors: [
    {
      name: "marlonrichert",
      github: "marlonrichert",
      twitter: "MarlonRichert",
    }
  ],
  github: "marlonrichert/zcolors",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "zsh",
    "git",
    "configuration",
    "theme",
    "lscolors",
    "color",
    "terminal",
    "zsh-theme",
    "theming",
    "prompt",
    "completion",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["zcolors.plugin.zsh"],
  },
};

export default plugin;
