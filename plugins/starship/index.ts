const plugin: Fig.Plugin = {
  name: "starship",
  displayName: "Starship",
  github: "starship/starship",
  description:
    "The minimal, blazing-fast, and infinitely customizable prompt for any shell!",
  icon: "images/icon.svg",
  screenshots: ["images/demo.gif"],
  site: "https://starship.rs",
  docs: "https://starship.rs/config/",
  twitter: "StarshipPrompt",
  license: ["ISC"],
  authors: [{ name: "Matan Kushner", twitter: "@matchai", github: "matchai" }],
  shells: ["bash", "zsh", "fish"],
  categories: ["Prompt"],

  installation: {
    origin: "github",
    preScript: "curl -sS https://starship.rs/install.sh | sh -s -- --yes",
    postScript: ({ ctx }) => {
      // Don't require a `default` case to so that this list is exhaustive.
      // eslint-disable-next-line default-case
      switch (ctx.shell) {
        case "bash":
          return 'eval "$(starship init bash)"';
        case "fish":
          return "starship init fish | source";
        case "zsh":
          return 'eval "$(starship init zsh)"';
      }
      throw new Error("Unsupported shell");
    },
  },
};
export default plugin;
