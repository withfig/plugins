const plugin: Fig.Plugin = {
  icon: "π°π·",
  name: "zsh-hangul_gomjellie",
  displayName: "Zsh Hangul",
  description: "νμ μ νμ μ§μ₯μμ λ²μ΄λμ κ΄λͺμ°Ύμ!",
  screenshots: [
    "https://raw.githubusercontent.com/gomjellie/zsh-hangul/master/.github/zsh-hangul.gif",
  ],
  type: "shell",
  authors: [
    {
      name: "gomjellie",
      github: "gomjellie",
    },
  ],
  github: "gomjellie/zsh-hangul",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["korean", "zsh-plugin"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-hangul.plugin.zsh"],
  },
};

export default plugin;
