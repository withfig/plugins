const plugin: Fig.Plugin = {
  icon: "😀",
  name: "copyzshell_rutchkiwi",
  type: "shell",
  description:
    "A plugin for oh-my-zsh to copy your shell configuration to another machine over ssh.",
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
