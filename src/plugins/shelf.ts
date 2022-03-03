const plugin: Fig.Plugin = {
  name: "shelf",
  type: "shell",
  description: "A simple zsh plugin used to bookmark files",
  github: "ecmma/shelf",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
