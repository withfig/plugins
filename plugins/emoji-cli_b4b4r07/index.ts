const plugin: Fig.Plugin = {
  name: "emoji-cli_b4b4r07",
  type: "shell",
  description: ":scream: Emoji completion on the command line",
  authors: [
    {
      name: "b4b4r07",
      github: "b4b4r07",
      twitter: "b4b4r07",
    }
  ],
  github: "b4b4r07/emoji-cli",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["emoji-cli.plugin.zsh"],
  },
};

export default plugin;
