const plugin: Fig.Plugin = {
  icon: "💡",
  name: "seasonal-zshthemes_jottenlips",
  type: "shell",
  description:
    "🛷 Seasonal ZSH Themes w/ git status ~ Impress your friends ~ Automatic theming for each season",
  authors: [
    {
      name: "jottenlips",
      github: "jottenlips",
      twitter: "JOttenlips",
    },
  ],
  github: "jottenlips/seasonal-zshthemes",
  license: ["MIT"],
  shells: ["bash", "zsh"],
  categories: ["Prompt"],
  keywords: [
    "zsh",
    "fall",
    "summer",
    "ohmyzsh",
    "zshrc",
    "halloween",
    "git",
    "terminal",
    "zsh-theme",
    "winter",
    "theme-script",
    "scripts",
    "shell",
    "shell-script",
    "bash",
    "holiday",
    "christmas",
    "spring",
    "seasonal-themes",
    "hacktoberfest",
  ],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["get_theme_season.sh"],
    },
    zsh: {
      sourceFiles: ["get_theme_season.sh"],
    },
  },
};

export default plugin;
