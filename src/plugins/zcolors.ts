const plugin: Fig.Plugin = {
  name: "zcolors",
  type: "shell",
  description: "🌈 Z Colors uses your $LS_COLORS to generate a coherent theme for Git and your Zsh prompt, command line and completions.",
  github: "marlonrichert/zcolors",
  shells: ["zsh"],
  tags: [
    "git",
    "theme",
    "zsh",
    "color",
    "terminal",
    "completion",
    "configuration",
    "prompt",
    "zsh-theme",
    "theming",
    "lscolors",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
