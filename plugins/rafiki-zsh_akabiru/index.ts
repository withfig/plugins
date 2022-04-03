const plugin: Fig.Plugin = {
  name: "rafiki-zsh_akabiru",
  type: "shell",
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
  keywords: ["zsh", "zsh-theme", "theme", "oh-my-zsh-theme", "rafiki-zsh", "emoji"],
  installation: {
    origin: "github",
    sourceFiles: ["rafiki.zsh-theme"],
  },
};

export default plugin;
