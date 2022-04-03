const plugin: Fig.Plugin = {
  name: "goenv_bbenne10",
  type: "shell",
  description: "oh-my-zsh plugin to manage $GOPATH similarly to Python's virtualenv",
  authors: [
    {
      name: "bbenne10",
      github: "bbenne10",
    },
  ],
  github: "bbenne10/goenv",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["goenv.plugin.zsh"],
  },
};

export default plugin;
