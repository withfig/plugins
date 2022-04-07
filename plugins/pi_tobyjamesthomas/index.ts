const plugin: Fig.Plugin = {
  icon: "🥧",
  name: "pi_tobyjamesthomas",
  displayName: "Pi",
  screenshots: [
    "https://raw.githubusercontent.com/tobyjamesthomas/pi/master/demo.gif",
  ],
  type: "shell",
  description: "A minimalist zsh theme with git status decorations",
  authors: [
    {
      name: "tobyjamesthomas",
      github: "tobyjamesthomas",
    },
  ],
  github: "tobyjamesthomas/pi",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: ["zsh", "oh-my-zsh", "zsh-theme", "iterm2"],
  installation: {
    origin: "github",
    sourceFiles: ["pi.zsh-theme"],
  },
};

export default plugin;
