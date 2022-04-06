const plugin: Fig.Plugin = {
  icon: "📂",
  name: "copyzshell_rutchkiwi",
  displayName: "Copy zshell",
  type: "shell",
  description:
    "A plugin to copy oh-my-zsh and your .zshrc and .gitconfig files to a " +
    "remote machine using SSH.",
  authors: [
    {
      name: "rutchkiwi",
      github: "rutchkiwi",
    },
  ],
  github: "rutchkiwi/copyzshell",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["copyzshell.plugin.zsh"],
  },
};

export default plugin;
