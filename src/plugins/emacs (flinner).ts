const plugin: Fig.Plugin = {
  name: "emacs (flinner)",
  type: "shell",
  description: "This plugin utilizes the Emacs daemon capability, allowing the user to quickly open frames. (from oh-my-zsh)",
  github: "Flinner/zsh-emacs",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
