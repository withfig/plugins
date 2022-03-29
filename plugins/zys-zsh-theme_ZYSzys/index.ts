const plugin: Fig.Plugin = {
  name: "zys-zsh-theme_ZYSzys",
  type: "shell",
  description: ":rainbow:A ZSH theme similar with agnoster-zsh-theme.",
  authors: [
    {
      name: "ZYSzys",
      github: "ZYSzys",
      twitter: "ZYSzys_",
    }
  ],
  github: "ZYSzys/zys-zsh-theme",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: [
    "zsh",
    "zsh-theme",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["zys.zsh-theme"],
  },
};

export default plugin;
