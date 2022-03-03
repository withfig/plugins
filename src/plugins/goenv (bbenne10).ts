const plugin: Fig.Plugin = {
  name: "goenv (bbenne10)",
  type: "shell",
  description: "oh-my-zsh plugin to manage $GOPATH similarly to Python's virtualenv",
  github: "bbenne10/goenv",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
