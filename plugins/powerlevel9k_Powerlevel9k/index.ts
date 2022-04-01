const plugin: Fig.Plugin = {
  name: "powerlevel9k_Powerlevel9k",
  type: "shell",
  description: "Powerlevel9k was a tool for building a beautiful and highly functional CLI, customized for you. P9k had a substantial impact on CLI UX, and its legacy is now continued by P10k.",
  authors: [
    {
      name: "Powerlevel9k",
      github: "Powerlevel9k",
    }
  ],
  github: "Powerlevel9k/powerlevel9k",
  license: ["MIT"],
  site: "https://github.com/romkatv/powerlevel10k",
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: [
    "zsh",
    "powerline-fonts",
    "terminal",
    "terminal-themes",
    "tools",
    "eye-candy",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["powerlevel9k.zsh-theme"],
  },
};

export default plugin;
