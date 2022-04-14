const plugin: Fig.Plugin = {
  icon: "🔗",
  name: "oh-my-zsh_theme_line_yw9381",
  displayName: "Oh My Zsh Theme Line",
  type: "shell",
  description: "Oh My Zsh Theme line.zsh-theme",
  authors: [
    {
      name: "yw9381",
      github: "yw9381",
    },
  ],
  github: "yw9381/oh-my-zsh_theme_line",
  license: ["WTFPL"],
  shells: ["bash", "zsh"],
  categories: ["Prompt"],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: [
        "one_key_install_zsh_gitee.sh",
        "one_key_install_zsh_github.sh",
      ],
    },
    zsh: {
      sourceFiles: [
        "one_key_install_zsh_gitee.sh",
        "one_key_install_zsh_github.sh",
      ],
    },
  },
};

export default plugin;
