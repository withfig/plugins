const plugin: Fig.Plugin = {
  icon: "🌟",
  name: "elixir-oh-my-zsh_gusaiani",
  displayName: "Elixir Oh My Zsh",
  type: "shell",
  description: "Oh My Zsh plugin for Elixir, IEX, Mix and Phoenix",
  authors: [
    {
      name: "gusaiani",
      github: "gusaiani",
      twitter: "gusaiani",
    },
  ],
  github: "gusaiani/elixir-oh-my-zsh",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Alias"],
  keywords: [
    "productivity",
    "terminal",
    "elixir",
    "zsh-plugins",
    "antigen",
    "zgen",
    "oh-my-zsh-plugin",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["elixir.plugin.zsh"],
  },
};

export default plugin;
