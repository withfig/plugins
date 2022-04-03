const plugin: Fig.Plugin = {
  name: "zsh-notes_chipsenkbeil",
  type: "shell",
  description: "Plugin extracted from my zshrc to provide a quick notes editing experience in zsh.",
  authors: [
    {
      name: "chipsenkbeil",
      github: "chipsenkbeil",
      twitter: "ChipSenkbeil",
    },
  ],
  github: "chipsenkbeil/zsh-notes",
  license: ["GPL-3.0"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-notes.plugin.zsh"],
  },
};

export default plugin;
