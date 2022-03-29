const plugin: Fig.Plugin = {
  name: "oh-my-zsh-powerline-theme_jeremyFreeAgent",
  type: "shell",
  description: "oh-my-zsh Powerline style Theme",
  authors: [
    {
      name: "jeremyFreeAgent",
      github: "jeremyFreeAgent",
      twitter: "jeremyFreeAgent",
    }
  ],
  github: "jeremyFreeAgent/oh-my-zsh-powerline-theme",
  shells: ["bash", "zsh"],
  categories: ["Prompt"],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: [
"install_in_omz.sh"
      ],
    },
    zsh: {
      sourceFiles: [
"install_in_omz.sh"
      ],
    },
  },
};

export default plugin;
