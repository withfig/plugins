const plugin: Fig.Plugin = {
  icon: "⌨️",
  name: "powerlevel10k",
  displayName: "Powerlevel10k",
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
  categories: ["Prompt"],
  installation: {
    origin: "github",
    sourceFiles: ["powerlevel10k.zsh-theme"],
    preScript:
      'if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then\n' +
      '  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"\n' +
      "fi",
    postScript: "[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh",
  },
};

export default plugin;
