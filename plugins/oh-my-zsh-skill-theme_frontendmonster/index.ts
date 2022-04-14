const plugin: Fig.Plugin = {
  icon: "💡",
  name: "oh-my-zsh-skill-theme_frontendmonster",
  displayName: "Oh My Zsh Skill Theme",
  type: "shell",
  description: "Oh-My-ZSH S-Kill theme",
  authors: [
    {
      name: "frontendmonster",
      github: "frontendmonster",
      twitter: "ASafaeirad",
    },
  ],
  github: "frontendmonster/oh-my-zsh-skill-theme",
  license: ["MIT"],
  shells: ["bash", "zsh"],
  categories: ["Prompt"],
  keywords: ["zsh", "theme", "s-kill"],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["install.sh"],
    },
    zsh: {
      sourceFiles: ["install.sh"],
    },
  },
};

export default plugin;
