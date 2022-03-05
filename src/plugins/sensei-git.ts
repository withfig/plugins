const plugin: Fig.Plugin = {
  name: "sensei-git",
  type: "shell",
  description: "Oh My Zsh plugin",
  github: "aswitalski/oh-my-zsh-sensei-git-plugin",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
