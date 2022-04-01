const plugin: Fig.Plugin = {
  name: "zsh-rustup-completion_pkulev",
  type: "shell",
  description: "Rustup completion plugin for oh-my-zsh framework",
  authors: [
    {
      name: "pkulev",
      github: "pkulev",
    }
  ],
  github: "pkulev/zsh-rustup-completion",
  shells: ["bash", "zsh"],
  categories: ["Completion"],
  keywords: [
    "zsh",
    "zsh-completion",
    "oh-my-zsh",
  ],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: [
"gen-completion.sh"
      ],
    },
    zsh: {
      sourceFiles: [
"rustup.plugin.zsh"
      ],
    },
  },
};

export default plugin;
