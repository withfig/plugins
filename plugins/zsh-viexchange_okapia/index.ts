const plugin: Fig.Plugin = {
  icon: "🔥",
  name: "zsh-viexchange_okapia",
  type: "shell",
  description: "zsh plugin similar to vim-exchange",
  authors: [
    {
      name: "okapia",
      github: "okapia",
    },
  ],
  github: "okapia/zsh-viexchange",
  license: ["ISC"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-viexchange.plugin.zsh"],
  },
};

export default plugin;
