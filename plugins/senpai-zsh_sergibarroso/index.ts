const plugin: Fig.Plugin = {
  icon: "💾",
  name: "senpai-zsh_sergibarroso",
  displayName: "Senpai",
  type: "shell",
  description: "Senpai is a Zsh clean prompt theme for Devops",
  authors: [
    {
      name: "sergibarroso",
      github: "sergibarroso",
      twitter: "sergibarroso",
    },
  ],
  github: "sergibarroso/senpai-zsh",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: ["zsh-theme", "zsh", "prompt"],
  installation: {
    origin: "github",
    sourceFiles: ["senpai.zsh-theme"],
  },
};

export default plugin;
