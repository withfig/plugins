const plugin: Fig.Plugin = {
  name: "copy-pasta_ChrisPenner",
  type: "shell",
  authors: [
    {
      name: "ChrisPenner",
      github: "ChrisPenner",
      twitter: "chrislpenner",
    },
  ],
  github: "ChrisPenner/copy-pasta",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["hacktoberfest"],
  installation: {
    origin: "github",
    sourceFiles: ["copy-pasta.plugin.zsh"],
  },
};

export default plugin;
