const plugin: Fig.Plugin = {
  icon: "🔥",
  name: "gitio-zsh_denysdovhan",
  displayName: "Gitio Zsh",
  type: "shell",
  description:
    ":scissors: A zsh plugin for generating a GitHub short URL using git.io.",
  authors: [
    {
      name: "denysdovhan",
      github: "denysdovhan",
      twitter: "denysdovhan",
    },
  ],
  github: "denysdovhan/gitio-zsh",
  license: ["MIT"],
  site: "https://git.io/gitio-zsh",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["gitio.plugin.zsh"],
  },
};

export default plugin;
