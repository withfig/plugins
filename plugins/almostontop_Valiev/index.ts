const plugin: Fig.Plugin = {
  icon: "🚀",
  name: "almostontop_Valiev",
  type: "shell",
  description: "almostontop zsh plugin",
  authors: [
    {
      name: "Valiev",
      github: "Valiev",
    },
  ],
  github: "Valiev/almostontop",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["almostontop.plugin.zsh"],
  },
};

export default plugin;
