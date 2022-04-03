const plugin: Fig.Plugin = {
  name: "ph-marks_lainiwa",
  type: "shell",
  description: ":kiss: Pornhub bookmarks at your CLI",
  authors: [
    {
      name: "lainiwa",
      github: "lainiwa",
    },
  ],
  github: "lainiwa/ph-marks",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "zsh-plugin", "pornhub", "bookmarks", "cli"],
  installation: {
    origin: "github",
    sourceFiles: ["ph-marks.plugin.zsh"],
  },
};

export default plugin;
