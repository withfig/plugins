const plugin: Fig.Plugin = {
  icon: "🐵",
  name: "rafiki-zsh_akabiru",
  displayName: "Rafiki Zsh",
  type: "shell",
  screenshots: [
    "https://www.dropbox.com/s/u08c2zofducjvh9/rafiki-zsh-2.png?raw=1",
  ],
  description: "👀👻 A zsh friend to watch over you.",
  authors: [
    {
      name: "akabiru",
      github: "akabiru",
      twitter: "_akabiru",
    },
  ],
  github: "akabiru/rafiki-zsh",
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: [
    "zsh",
    "zsh-theme",
    "theme",
    "oh-my-zsh-theme",
    "rafiki-zsh",
    "emoji",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["rafiki.zsh-theme"],
  },
};

export default plugin;
