const plugin: Fig.Plugin = {
  icon: "🧑‍💻",
  name: "pass-zsh-completion_ninrod",
  displayName: "Pass Zsh Completion",
  type: "shell",
  description: "pass zsh completion plugin",
  authors: [
    {
      name: "ninrod",
      github: "ninrod",
    },
  ],
  github: "ninrod/pass-zsh-completion",
  shells: ["zsh"],
  categories: ["Completion"],
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
