const plugin: Fig.Plugin = {
  icon: "⚡️",
  name: "sobole-zsh-theme_sobolevn",
  displayName: "Sobole",
  description: "Minimalistic zsh theme inspired by the old-fashioned hobbies",
  screenshots: [
    "https://raw.githubusercontent.com/sobolevn/sobole-zsh-theme/master/showcases/ls-colors.png",
    "https://raw.githubusercontent.com/sobolevn/sobole-zsh-theme/master/showcases/ls-colors-dark.png",
  ],
  type: "shell",
  authors: [
    {
      name: "sobolevn",
      github: "sobolevn",
    },
  ],
  github: "sobolevn/sobole-zsh-theme",
  site: "http://sobolevn.me/sobole-zsh-theme/",
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: ["zsh", "zsh-theme", "terminal", "terminal-theme", "theme"],
  installation: {
    origin: "github",
    sourceFiles: ["sobole.zsh-theme"],
  },
  configuration: [
    {
      displayName: "Theme Mode",
      description: "The theme mode to use",
      name: "SOBOLE_THEME_MODE",
      type: "environmentVariable",
      interface: "select",
      default: "light",
      options: [
        {
          displayName: "Light",
          option: "light",
        },
        {
          displayName: "Dark",
          option: "dark",
        },
      ],
    },
    {
      displayName: "Do Not Touch Higlighting",
      description:
        "Tweaks zsh-syntax-highlighting. If it is installed, " +
        "modifies string colors, some other minor things.",
      name: "SOBOLE_DONOTTOUCH_HIGHLIGHTING",
      type: "environmentVariable",
      interface: "toggle",
      default: false,
    },
  ],
};

export default plugin;
