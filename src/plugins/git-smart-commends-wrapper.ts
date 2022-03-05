const plugin: Fig.Plugin = {
  name: "git-smart-commends-wrapper",
  type: "shell",
  description: "Oh-my-zsh wrapper for zsh-git-smart-commands plugin",
  github: "jelek21/omz-git-smart-commands",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
