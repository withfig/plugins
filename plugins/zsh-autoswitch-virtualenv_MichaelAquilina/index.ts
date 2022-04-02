const plugin: Fig.Plugin = {
  name: "zsh-autoswitch-virtualenv_MichaelAquilina",
  displayName: "Zsh Autoswitch Python Virtualenv",
  icon: "🐍",
  type: "shell",
  description:
    "ZSH plugin to automatically switch python virtualenvs (including pipenv and poetry) as you move between directories",
  authors: [
    {
      name: "MichaelAquilina",
      github: "MichaelAquilina",
    },
  ],
  github: "MichaelAquilina/zsh-autoswitch-virtualenv",
  license: ["GPL-3.0"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "zsh-plugins",
    "virtualenv",
    "shell-script",
    "python",
    "virtualenvwrapper",
    "zsh",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["autoswitch_virtualenv.plugin.zsh"],
  },
};

export default plugin;
