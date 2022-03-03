const plugin: Fig.Plugin = {
  name: "youtube-dl-aliases",
  type: "shell",
  description: "Custom plugin for Oh My Zsh with youtube-dl aliases",
  github: "katrinleinweber/oh-my-zsh-youtube-dl-aliases",
  shells: ["zsh"],
  tags: [
    "webm",
    "youtube-dl",
    "degrowth",
    "oh-my-zsh-plugin",
    "36c3",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
