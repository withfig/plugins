const plugin: Fig.Plugin = {
  name: "rbenv (ecortinas)",
  type: "shell",
  description: "A zsh rbenv plugin",
  github: "ecortinas/zsh-rbenv",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
