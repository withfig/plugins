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
    onInstall: {
      command: [
        "curl -sS https://starship.rs/install.sh | sh -s -- --yes --bin-dir=$HOME/.local/bin",
      ],
      check: {
        commandExists: ["starship"],
        commandOutput: [
          {
            command: "starship module character",
            output: "[1;32m❯[0m ",
          },
        ],
      },
    },
    onUninstall: {
      file: ["~/.local/bin/starship"],
    },
    bash: {
      postScript: 'eval "$(starship init bash)"',
    },
    fish: {
      postScript: "starship init fish | source",
    },
    zsh: {
      postScript: 'eval "$(starship init zsh)"',
    },
  },
};
export default plugin;
