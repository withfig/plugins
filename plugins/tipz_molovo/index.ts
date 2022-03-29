const plugin: Fig.Plugin = {
  name: "tipz_molovo",
  type: "shell",
  description: "Gives you helpful hints when you execute a command for which you have an alias defined",
  authors: [
    {
      name: "molovo",
      github: "molovo",
      twitter: "molovo",
    }
  ],
  github: "molovo/tipz",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "zsh",
    "zsh-plugin",
    "alias",
    "zsh-plugins",
    "aliases",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["tipz.zsh"],
  },
};

export default plugin;
