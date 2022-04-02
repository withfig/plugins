const plugin: Fig.Plugin = {
  name: "powerlevel10k",
  displayName: "Powerlevel10k",
  icon: "💪",
  type: "shell",
  description: "A Zsh theme",
  github: "romkatv/powerlevel10k",
  license: ["MIT"],
  authors: [
    {
      name: "romkatv",
      github: "romkatv",
      twitter: "romkatv",
    },
  ],
  shells: ["zsh"],
  categories: ["Framework"],
  installation: {
    origin: "github",
    sourceFiles: ["powerlevel10k.zsh-theme"],
    preScript: [
      'if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then',
      '  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"',
      "fi",
    ],
    postScript: "[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh",
  },
};

export default plugin;
