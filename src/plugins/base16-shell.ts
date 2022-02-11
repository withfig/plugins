const plugin: Fig.Plugin = {
  name: "base16-shell",
  type: "shell",
  description: "Base16 for Shells",
  github: "chriskempson/base16-shell",
  license: ["MIT"],
  shells: ["bash", "zsh", "fish"],
  tags: ["theme"],
  installation: {
    source: "github",
    use: [],
    zsh: {
      post: ({ ctx }) =>
        `[ -n "$PS1" ] && [ -s "${ctx.installDirectory}/profile_helper.sh" ] && eval "$("${ctx.installDirectory}/profile_helper.sh")"`,
    },
    bash: {
      post: ({ ctx }) =>
        `[ -n "$PS1" ] && [ -s "${ctx.installDirectory}/profile_helper.sh" ] && eval "$("${ctx.installDirectory}/profile_helper.sh")"`,
    },
    fish: {
      post: ({ ctx }) => [
        `if status --is-interactive`,
        `    source "${ctx.installDirectory}/profile_helper.fish"`,
        `end`,
      ],
    },
  },
};

export default plugin;
