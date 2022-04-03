const plugin: Fig.Plugin = {
  name: "ansible-role-zsh_viasite-ansible",
  type: "shell",
  description:
    "Setup antigen with oh-my-zsh, powerlevel10k theme, fzf, autosuggestions, syntax-highlighting",
  authors: [
    {
      name: "viasite-ansible",
      github: "viasite-ansible",
    },
  ],
  github: "viasite-ansible/ansible-role-zsh",
  site: "https://habrahabr.ru/post/323496/",
  shells: ["bash", "zsh"],
  categories: ["Framework"],
  keywords: [
    "zsh",
    "oh-my-zsh",
    "powerlevel9k",
    "ansible-role",
    "ansible-galaxy",
    "zsh-autosuggestions",
    "zsh-syntax-highlighting",
    "fzf",
    "zsh-command-time",
  ],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["install.sh"],
    },
    zsh: {
      sourceFiles: ["install.sh"],
    },
  },
};

export default plugin;
