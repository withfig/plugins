const plugin: Fig.Plugin = {
  name: "firebase-zsh_Seqi",
  type: "shell",
  description: "A Firebase plugin for Zsh",
  authors: [
    {
      name: "Seqi",
      github: "Seqi",
    }
  ],
  github: "Seqi/firebase-zsh",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["firebase.plugin.zsh"],
  },
};

export default plugin;
