const plugin: Fig.Plugin = {
  name: "pass-zsh-completion",
  type: "shell",
  description: "pass zsh completion plugin",
  github: "ninrod/pass-zsh-completion",
  shells: ["zsh"],
  tags: [
    "plugin",
    "zsh",
    "password-manager",
    "password",
    "pass",
    "password-store",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
