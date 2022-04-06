const plugin: Fig.Plugin = {
  icon: "🎩",
  name: "hacker-quotes_oldratlee",
  displayName: "hacker-quotes",
  screenshots: [
    "https://raw.githubusercontent.com/oldratlee/hacker-quotes/master/images/preview.png",
  ],
  type: "shell",
  description: "Just print a hacker quote randomly when you open a terminal",
  authors: [
    {
      name: "oldratlee",
      github: "oldratlee",
      twitter: "oldratlee",
    },
  ],
  github: "oldratlee/hacker-quotes",
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
  configuration: [
    {
      displayName: "When Interactive",
      description:
        "Default only print hacker quotes when shell is a interactive login shell, enable to " +
        "only check if the shell is interactive",
      name: "ZSH_HACKER_QUOTES_ENABLE_WHEN_INTERACTIVE",
      type: "environmentVariable",
      interface: "toggle",
      default: false,
    },
  ],
};

export default plugin;
