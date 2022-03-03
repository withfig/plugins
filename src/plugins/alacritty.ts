const plugin: Fig.Plugin = {
  name: "alacritty",
  type: "shell",
  description: "A (zsh) plugin to control alacritty color themes.",
  github: "casonadams/alacritty-shell",
  shells: ["zsh"],
  tags: [
    "zsh",
    "alacritty",
    "alacritty-theme",
    "alacritty-theme-switcher",
    "alacritty-theme-changer",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
