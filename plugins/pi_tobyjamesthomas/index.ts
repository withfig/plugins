const plugin: Fig.Plugin = {
  name: "pi_tobyjamesthomas",
  type: "shell",
  description: "A minimalist zsh theme with git status decorations",
  authors: [
    {
      name: "tobyjamesthomas",
      github: "tobyjamesthomas",
    }
  ],
  github: "tobyjamesthomas/pi",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: [
    "zsh",
    "oh-my-zsh",
    "zsh-theme",
    "iterm2",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["pi.zsh-theme"],
  },
};

export default plugin;
