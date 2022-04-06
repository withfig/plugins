const plugin: Fig.Plugin = {
  icon: "🚀",
  name: "almostontop_Valiev",
  displayName: "almostontop zsh",
  type: "shell",
  description:
    "Clear previous command output every time before new command executed in shell",
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
