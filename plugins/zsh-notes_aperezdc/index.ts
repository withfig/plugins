const plugin: Fig.Plugin = {
  name: "zsh-notes_aperezdc",
  type: "shell",
  description:
    "Quick selection widget for Markdown notes, inspired by terminal_velocity",
  authors: [
    {
      name: "aperezdc",
      github: "aperezdc",
    },
  ],
  github: "aperezdc/zsh-notes",
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "plugin", "notes-tool"],
  installation: {
    origin: "github",
    sourceFiles: ["notes.plugin.zsh"],
  },
};

export default plugin;
