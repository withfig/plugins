const plugin: Fig.Plugin = {
  name: "lando-zsh_JoshuaBedford",
  type: "shell",
  description: "A simple zsh plugin for lando commands.",
  authors: [
    {
      name: "JoshuaBedford",
      github: "JoshuaBedford",
    }
  ],
  github: "JoshuaBedford/lando-zsh",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["lando.plugin.zsh"],
  },
};

export default plugin;
