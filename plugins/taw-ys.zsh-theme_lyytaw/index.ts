const plugin: Fig.Plugin = {
  icon: "💥",
  name: "taw-ys.zsh-theme_lyytaw",
  displayName: "Taw Ys",
  type: "shell",
  description: "基于ys的定制化oh-my-zsh主题，支持python的prompt显示",
  authors: [
    {
      name: "lyytaw",
      github: "lyytaw",
    },
  ],
  github: "lyytaw/taw-ys.zsh-theme",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: ["zsh-theme"],
  installation: {
    origin: "github",
    sourceFiles: ["taw-ys-conda.zsh-theme", "taw-ys-virtualenv.zsh-theme"],
  },
};

export default plugin;
