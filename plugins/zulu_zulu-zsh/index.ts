const plugin: Fig.Plugin = {
  name: "zulu_zulu-zsh",
  displayName: "Zulu",
  type: "shell",
  description: "Total environment manager for ZSH",
  authors: [
    {
      name: "zulu-zsh",
      github: "zulu-zsh",
    },
  ],
  github: "zulu-zsh/zulu",
  license: ["MIT"],
  site: "https://zulu.molovo.co",
  shells: ["zsh"],
  categories: ["Framework"],
  keywords: ["zulu", "zsh", "framework", "plugin-manager"],
  installation: {
    origin: "github",
    sourceFiles: ["build.zsh"],
  },
};

export default plugin;
