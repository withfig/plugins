const plugin: Fig.Plugin = {
  icon: "⭐️",
  name: "wade.zsh-theme_wadehammes",
  type: "shell",
  description:
    "A mashup of the popular ZSH themes 'Agnoster' and 'Fishy', with some visual tweaks. ",
  authors: [
    {
      name: "wadehammes",
      github: "wadehammes",
      twitter: "nthoftype",
    },
  ],
  github: "wadehammes/wade.zsh-theme",
  shells: ["zsh"],
  categories: ["Prompt"],
  installation: {
    origin: "github",
    sourceFiles: ["wade.zsh-theme"],
  },
};

export default plugin;
