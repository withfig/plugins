const plugin: Fig.Plugin = {
  name: "zsh-aliases-exa_DarrinTisdale",
  type: "shell",
  description: "zsh plugin adding aliases for the exa command-line tool",
  authors: [
    {
      name: "DarrinTisdale",
      github: "DarrinTisdale",
      twitter: "DarrinTisdale",
    }
  ],
  github: "DarrinTisdale/zsh-aliases-exa",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-aliases-exa.plugin.zsh"],
  },
};

export default plugin;
