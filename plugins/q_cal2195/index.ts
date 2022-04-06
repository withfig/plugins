const plugin: Fig.Plugin = {
  icon: "😎",
  name: "q_cal2195",
  displayName: "Q",
  type: "shell",
  description:
    "q implements vim like macro registers in your bash and zsh shell!",
  authors: [
    {
      name: "cal2195",
      github: "cal2195",
    },
  ],
  github: "cal2195/q",
  license: ["MIT"],
  shells: ["bash", "zsh"],
  categories: ["Convenience Function"],
  keywords: [
    "zsh",
    "vim",
    "shell",
    "registers",
    "bookmarks",
    "directories",
    "bash",
    "bashrc",
    "zshrc",
  ],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["q.sh"],
    },
    zsh: {
      sourceFiles: ["q.plugin.zsh"],
    },
  },
};

export default plugin;
