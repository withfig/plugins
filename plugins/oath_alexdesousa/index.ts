const plugin: Fig.Plugin = {
  icon: "💾",
  name: "oath_alexdesousa",
  type: "shell",
  description: "Zsh plugin to manage one-time passwords.",
  authors: [
    {
      name: "alexdesousa",
      github: "alexdesousa",
      twitter: "thebroken_link",
    },
  ],
  github: "alexdesousa/oath",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh-plugin", "2fa"],
  installation: {
    origin: "github",
    sourceFiles: ["oath.plugin.zsh"],
  },
};

export default plugin;
