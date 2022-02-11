const plugin: Fig.Plugin = {
  name: "powerlevel10k",
  type: "shell",
  description: "A Zsh theme",
  github: "romkatv/powerlevel10k",
  license: ["MIT"],
  shells: ["zsh"],
  tags: ["zsh", "theme"],
  installation: {
    source: "github",
    pre: [
      'if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then',
      '  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh',
      "fi",
    ],
    post: "[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh",
  },
};

export default plugin;
