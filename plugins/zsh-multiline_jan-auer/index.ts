const plugin: Fig.Plugin = {
  icon: "🔥",
  name: "zsh-multiline_jan-auer",
  type: "shell",
  description: "Theme for oh-my-zsh based on Agnoster.",
  authors: [
    {
      name: "jan-auer",
      github: "jan-auer",
    },
  ],
  github: "jan-auer/zsh-multiline",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Prompt"],
  installation: {
    origin: "github",
    sourceFiles: ["multiline.zsh-theme"],
  },
};

export default plugin;
