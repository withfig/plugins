const plugin: Fig.Plugin = {
  icon: "🔥",
  name: "zsh-crypto-prices_vincentdnl",
  displayName: "Zsh Crypto Prices",
  type: "shell",
  description:
    "Oh My Zsh plugin adding a Powerlevel9k segment to display crypto prices in Zsh",
  authors: [
    {
      name: "vincentdnl",
      github: "vincentdnl",
    },
  ],
  github: "vincentdnl/zsh-crypto-prices",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "zsh",
    "zshrc",
    "zshell",
    "zsh-plugin",
    "oh-my-zsh",
    "oh-my-zsh-plugin",
    "powerlevel9k",
    "cryptocurrency",
    "cryptocurrencies",
    "bitcoin",
    "bitcoin-price",
    "crypto",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-crypto-prices.plugin.zsh"],
  },
};

export default plugin;
