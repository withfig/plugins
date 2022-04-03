const plugin: Fig.Plugin = {
  name: "q_cal2195",
  type: "shell",
  description: "q - vim like macro registers for your bash and zsh shell!",
  authors: [
    {
      name: "cal2195",
      github: "cal2195",
    },
  ],
  github: "cal2195/q",
  license: ["MIT"],
  shells: ["bash", "zsh"],
  categories: ["Other"],
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
