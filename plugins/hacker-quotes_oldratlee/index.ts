const plugin: Fig.Plugin = {
  name: "hacker-quotes_oldratlee",
  type: "shell",
  description: "🎩  An oh-my-zsh plugin, just print a hacker quote randomly when you open a terminal.",
  authors: [
    {
      name: "oldratlee",
      github: "oldratlee",
      twitter: "oldratlee",
    }
  ],
  github: "oldratlee/hacker-quotes",
  site: "https://github.com/oldratlee/hacker-quotes/blob/master/README.md",
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "zsh",
    "zsh-plugin",
    "oh-my-zsh",
    "oh-my-zsh-plugin",
    "plugin",
    "hacker-quotes",
    "quotes",
    "hackers",
    "zsh-plugins",
    "hacker",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["hacker-quotes.plugin.zsh"],
  },
};

export default plugin;
