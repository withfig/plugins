const plugin: Fig.Plugin = {
  name: "base16-shell",
  type: "shell",
  description: "Base16 for Shells",
  github: "chriskempson/base16-shell",
  license: ["MIT"],
  shells: ["bash", "zsh", "fish"],
  tags: ["theme"],
  installation: {
    origin: "github",
    postScript: ({ ctx }) =>
    `[ -n "$PS1" ] && [ -s "${ctx.plugin.installDirectory}/profile_helper.sh" ] && eval "$("${ctx.plugin.installDirectory}/profile_helper.sh")"`,
    fish: {
      postScript: ({ ctx }) => [
        `if status --is-interactive`,
        `    source "${ctx.plugin.installDirectory}/profile_helper.fish"`,
        `end`,
      ],
    },
  },
};

export default plugin;
