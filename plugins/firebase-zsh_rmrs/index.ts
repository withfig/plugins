const plugin: Fig.Plugin = {
  name: "firebase-zsh_rmrs",
  type: "shell",
  description: "Firebase zsh plugin",
  authors: [
    {
      name: "rmrs",
      github: "rmrs",
    }
  ],
  github: "rmrs/firebase-zsh",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["firebase.plugin.zsh"],
  },
};

export default plugin;
