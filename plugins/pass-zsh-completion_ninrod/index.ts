const plugin: Fig.Plugin = {
  name: "pass-zsh-completion_ninrod",
  type: "shell",
  description: "pass zsh completion plugin",
  authors: [
    {
      name: "ninrod",
      github: "ninrod",
    }
  ],
  github: "ninrod/pass-zsh-completion",
  shells: ["zsh"],
  categories: ["Compleation"],
  keywords: [
    "zsh",
    "plugin",
    "password-store",
    "pass",
    "password",
    "password-manager",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["pass-zsh-completion.plugin.zsh"],
  },
};

export default plugin;
