const plugin: Fig.Plugin = {
  name: "oath",
  type: "shell",
  description: "Zsh plugin to manage one-time passwords.",
  github: "alexdesousa/oath",
  shells: ["zsh"],
  tags: [
    "zsh-plugin",
    "2fa",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
