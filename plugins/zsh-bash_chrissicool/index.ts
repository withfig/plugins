const plugin: Fig.Plugin = {
  name: "zsh-bash_chrissicool",
  type: "shell",
  description: "Bash compatibility plugin for ZSH",
  authors: [
    {
      name: "chrissicool",
      github: "chrissicool",
      twitter: "chrissicool",
    }
  ],
  github: "chrissicool/zsh-bash",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-bash.plugin.zsh"],
  },
};

export default plugin;
