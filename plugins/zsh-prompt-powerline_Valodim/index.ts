const plugin: Fig.Plugin = {
  icon: "🔗",
  name: "zsh-prompt-powerline_Valodim",
  displayName: "Zsh Prompt Powerline",
  type: "shell",
  description:
    "A ZSH prompt based on the powerline font from the popular vim plugin",
  authors: [
    {
      name: "Valodim",
      github: "Valodim",
    },
  ],
  github: "Valodim/zsh-prompt-powerline",
  shells: ["zsh"],
  categories: ["Prompt"],
  installation: {
    origin: "github",
    preScript: ({ ctx }) =>
      `fpath+=("${ctx.plugin.installDirectory}")\n` +
      `autoload promptinit ; promptinit`,
    postScript: "prompt powerline",
  },
};

export default plugin;
